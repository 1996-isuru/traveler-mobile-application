import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Modal,
  Pressable,
  Alert,
  TextInput,
  ActivityIndicator,
} from "react-native";
import colors from "../../assets/asse/colors/colors";
import profile from "../../assets/asse/images/pic.png";
import Entypo from "react-native-vector-icons/Entypo";
import activitiesData from "../../assets/asse/data/activitiesData";
import hotelData from "../../assets/asse/data/hotelData";
import guideData from "../../assets/asse/data/guideData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  images,
  SIZES,
  COLORS,
  FONTS,
  localhost,
  GOOGLE_API_KEY,
} from "../../constants/index";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const TouristHome = ({ navigation }) => {
  //getting async storage data
  const [userToken, setToken] = useState(null);
  const [userEmail, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isloadingCreateTour, setIsloadingCreateTour] = useState(false);

  //create tour
  const [tourName, setTourName] = useState(null);
  const [startLocationName, setStartLocationName] = useState("lllllll");
  const [startLocationLatitude, setStartLocationLatitude] = useState("lllllll");
  const [startLocationLongitude, setStartLocatinLongitude] =
    useState("lllllll");
  const [endLocationName, setEndLocationName] = useState("lllllll");
  const [endLocationLatitude, setEndLocationLatitude] = useState("lllllll");
  const [endLocationLongitude, setEndLocatinLongitude] = useState("lllllll");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const userName = await AsyncStorage.getItem("userName");
      const email = await AsyncStorage.getItem("userEmail");

      setToken(token);
      setEmail(email);
      setUserName(userName);
    } catch (error) {
      console.log(error);
    }
  };
  //getting async storage data

  const renderHotelItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("HotelList", {
            item: item,
          })
        }
      >
        <ImageBackground
          source={item.image}
          style={[
            styles.hotelItem,
            { marginLeft: item.id === "hotel-1" ? 20 : 0 },
          ]}
          imageStyle={styles.hotelItemImage}
        >
          <Text style={styles.hotelItemTitle}>{item.title}</Text>
          <View style={styles.hotelItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.hotelItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  const renderGuideItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("GuideList", {
            item: item,
          })
        }
      >
        <ImageBackground
          source={item.image}
          style={[
            styles.hotelItem,
            { marginLeft: item.id === "guide-1" ? 20 : 0 },
          ]}
          imageStyle={styles.hotelItemImage}
        >
          <Text style={styles.hotelItemTitle}>{item.title}</Text>
          <View style={styles.hotelItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.hotelItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  const renderActivityItem = ({ item }) => {
    return (
      <View
        style={[
          styles.activityItemWrapper,
          { marginLeft: item.id === "activities-1" ? 20 : 0 },
        ]}
      >
        <Image source={item.image} style={styles.activityItemTitle} />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };

  const registerTour = async () => {
    if (!tourName) {
      Alert.alert("Please fill all fields.");
    } else {
      setModalVisible(!modalVisible);
      setIsloadingCreateTour(true);
      fetch(localhost + "/tourplan/checktour", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail }),
      })
        .then((res) => res.json())
        .then(async (result) => {
          if (result.message === "Already not Created") {
            fetch(localhost + "/tourplan/plantourdetails", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userEmail,
                tourName,
                startLocationName,
                startLocationLatitude,
                startLocationLongitude,
                endLocationName,
                endLocationLatitude,
                endLocationLongitude,
              }),
            });
            setIsloadingCreateTour(!modalVisible);
            navigation.navigate("TourPlanMap");
          } else {
            console.log("add tour");
            fetch(localhost + "/tourplan/addtour", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userEmail,
                tourName,
                startLocationName,
                startLocationLatitude,
                startLocationLongitude,
                endLocationName,
                endLocationLatitude,
                endLocationLongitude,
              }),
            })
              .then((res) => res.json())
              .then(async (result) => {
                if (result.message === "Tour Name exists") {
                  Alert.alert("Tour Name exists");
                } else {
                  setIsloadingCreateTour(!modalVisible);
                  navigation.navigate("TourPlanMap");
                }
              });
          }
        });
    }
  };

  return (
    <View style={styles.container}>
      {/* loading model */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isloadingCreateTour}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!isloadingCreateTour);
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              flexDirection: "row",
              justifyContent: "space-around",
              padding: 10,
            }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </Modal>
      </View>
      {/* loading model */}

      {/* Popup when click new tour */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.navy,
                  marginTop: -10,
                  marginLeft: 260,
                  fontSize: 25,
                }}
              >
                X
              </Text>
            </TouchableOpacity>
            <View style={styles.footer}>
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.navy,
                  textAlign: "center",
                  fontSize: 30,
                  marginTop: -130,
                }}
              >
                Tour Details
              </Text>
              <View style={{ flex: 1, paddingTop: 20 }}>
                <View>
                  <Text style={styles.text_footer}>Tour Name: </Text>
                  <View style={styles.action}>
                    <TextInput
                      placeholder="Tour Name:"
                      // style={styles.TextInput}
                      onChangeText={(tourNamee) => setTourName(tourNamee)}
                    />
                  </View>
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Text style={styles.text_footer}>From </Text>
                  <View style={styles.action}>
                    <GooglePlacesAutocomplete
                      placeholder="Search"
                      onPress={(data, details = null) => {
                        console.log(data, details);
                      }}
                      query={{
                        key: GOOGLE_API_KEY,
                        language: "en",
                      }}
                    />
                  </View>
                </View>
                <View style={{ paddingTop: 10 }}>
                  <Text style={styles.text_footer}>To</Text>
                  <View style={styles.action}>
                    <GooglePlacesAutocomplete
                      placeholder="Search"
                      onPress={(data, details = null) => {
                        console.log(data, details);
                      }}
                      query={{
                        key: GOOGLE_API_KEY,
                        language: "en",
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={registerTour}
            >
              <Text style={styles.textStyle}>Create Tour</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
      {/* Popup when click new tour */}

      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Image source={profile} style={styles.profileImage} />
            <Text style={styles.name}>{userName}</Text>
          </View>
        </SafeAreaView>

        {/* Plan */}
        <View style={styles.planWrapper}>
          <Text style={styles.planTitle}>Make a Tour Plan</Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                marginHorizontal: 100,
                marginTop: 20,
                marginBottom: 20,
                backgroundColor: colors.darkBlue,
                marginLeft: 20,
                // alignItems: "center",
                paddingVertical: 15,
                borderRadius: 50,
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text style style={styles.buttonText}>
                New Trip
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginHorizontal: 100,
                marginTop: 20,
                marginBottom: 20,
                backgroundColor: colors.darkBlue,
                // alignItems: "center",
                marginRight: 10,
                paddingVertical: 15,
                borderRadius: 50,
              }}
              onPress={() => navigation.navigate("PlanedTours")}
            >
              <Text style style={styles.buttonText}>
                New Trip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Activities */}
        <View style={styles.activitiesWrapper}>
          <Text style={styles.activitiesTitle}>Activities</Text>
          <View style={styles.activitiesItemsWrapper}>
            <SafeAreaView style={{ flex: 1 }}>
              <FlatList
                data={activitiesData}
                renderItem={renderActivityItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </SafeAreaView>
          </View>
        </View>

        {/* Hotel */}
        <View style={styles.hotelWrapper}>
          <Text style={styles.hotelTitle}>Hotels Nearby</Text>

          <View style={styles.hotelItemWrapper}>
            <SafeAreaView style={{ flex: 1 }}>
              <FlatList
                data={hotelData}
                renderItem={renderHotelItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </SafeAreaView>
          </View>
        </View>
        {/* Guide */}
        <View style={styles.hotelWrapper}>
          <Text style={styles.hotelTitle}>Guides Nearby</Text>

          <View style={styles.hotelItemWrapper}>
            <SafeAreaView style={{ flex: 1 }}>
              <FlatList
                data={guideData}
                renderItem={renderGuideItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </SafeAreaView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.lightBlue,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  name: {
    fontFamily: "Roboto",
    fontSize: 15,
    color: colors.darkBlue,
    fontWeight: "bold",
  },
  planWrapper: {
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: colors.lightBlue,
  },
  planTitle: {
    marginHorizontal: 10,
    marginTop: 10,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 15,
    color: colors.darkBlue,
  },
  hotelWrapper: {
    marginTop: 5,
    marginHorizontal: 10,
    backgroundColor: colors.lightBlue,
  },
  hotelTitle: {
    marginHorizontal: 20,
    marginTop: 10,
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 15,
    color: colors.darkBlue,
  },
  hotelItem: {
    width: 170,
    height: 250,
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  hotelItemImage: {
    borderRadius: 20,
  },
  hotelItemWrapper: {
    paddingVertical: 20,
  },
  hotelItemTitle: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
  hotelItemLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  hotelItemLocationText: {
    marginLeft: 5,
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "bold",
    color: colors.white,
  },
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "bold",
    color: colors.darkBlue,
  },
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
  activityItemWrapper: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 10,
  },
  activityItemTitle: {
    width: 36,
    height: 36,
  },
  activityItemText: {
    marginTop: 5,
    fontFamily: "Roboto",
    fontSize: 14,
    color: colors.darkGray,
  },
  buttonWrapper: {
    marginHorizontal: 100,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: colors.darkBlue,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 50,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 15,
    color: colors.white,
  },

  //model style

  //model input
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    // borderBottomColor: "#f2f2f2",
    paddingBottom: 0,
  },
  textInput: {
    marginTop: Platform.OS === "ios" ? 0 : 12,
    paddingLeft: 10,
    color: "#05375a",
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 150,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    marginTop: 130,
    margin: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    height: 500,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default TouristHome;
