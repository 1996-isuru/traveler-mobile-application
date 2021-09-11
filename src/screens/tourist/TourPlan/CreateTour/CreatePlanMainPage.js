import React, { useState } from "react";
import {
  images,
  SIZES,
  COLORS,
  FONTS,
  localhost,
  GOOGLE_API_KEY,
} from "../../../../constants/index";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Button,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import colors from "../../../../assets/asse/colors/colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const prePlanTripData = [
  {
    id: 11,
    name: "Colombo to Jaffa",
    photo: images.trip1,
    duration: "3 Days",
    lenth: "200Km",
    location: {
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
    },
    photo: [
      {
        photo: images.trip2,
      },
      {
        photo: images.trip3,
      },
      {
        photo: images.trip4,
      },
    ],
  },
  {
    id: 22,
    name: "Colombo To NuwaEliya",
    photo: images.trip4,
    duration: "2 Days",
    lenth: "200Km",
    location: {
      latitude: 1.556306570595712,
      longitude: 110.35504616746915,
    },
    photo: [
      {
        photo: images.trip5,
      },
      {
        photo: images.trip6,
      },
      {
        photo: images.trip7,
      },
      {
        photo: images.trip1,
      },
    ],
  },
];

const TourPlanMap = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [restaurants, setRestaurants] = useState(prePlanTripData);

  //add location
  const [modalVisible, setModalVisible] = useState(false);
  const [isloadingCreateTour, setIsloadingCreateTour] = useState(false);

  function popUpAddLocation() {
    const AddLocation = () => {
      Alert.alert("ssssssss");
    };
    return (
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
                <View style={{ paddingTop: 10 }}>
                  <Text style={styles.text_footer}>Add Location: </Text>
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
              onPress={AddLocation}
            >
              <Text style={styles.textStyle}>Add Location</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    );
  }

  function LoadingIcon() {
    return (
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
    );
  }
  //add location

  function renderMainButton() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            marginHorizontal: 10,
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: colors.blue,
            // marginLeft: 20,
            // alignItems: "center",
            paddingVertical: 15,
          }}
          onPress={() => setModalVisible(true)}
        >
          <Text style style={styles.buttonText}>
            Add New Location
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginHorizontal: 30,
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: colors.blue,
            // alignItems: "center",
            // marginRight: 10,
            paddingVertical: 15,
          }}
          onPress={() => navigation.navigate("ChatScreen")}
        >
          <Text style style={styles.buttonText}>
            Group Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: 20,
            backgroundColor: colors.blue,
            // alignItems: "center",
            // marginRight: 10,
            paddingVertical: 15,
            borderRadius: 50,
          }}
          onPress={() => navigation.navigate("FinalizeMapView")}
        >
          <Text style style={styles.buttonText}>
          Finalize MapView
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  //renderMainCategory function start
  function renderMainCategories() {
    return (
      <View style={{ padding: SIZES.padding * 2 }}>
        <Text style={{ ...FONTS.h2, textAlign: "center" }}>Plan your tour</Text>
      </View>
    );
  }

  function renderLocationList() {
    const renderItem = ({ item }) => (
      <View
        style={{
          marginBottom: SIZES.padding * 2,
          flex: 1,
          // justifyContent: "space-between",
          backgroundColor: "#ffff",
          borderColor: "#000080",
          padding: 25,
          marginLeft: 5,
          marginRight: 5,
          borderRadius: 30,
          marginTop: 20,
        }}
      >
        {/* trip info */}
        <Text style={{ ...FONTS.h4 }}>{item.name}</Text>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 30,
            justifyContent: "space-between",
          }}
        >
          <Button
            style={{
              fontSize: 20,
              backgroundColor: "02B3C5",
              padding: 90,
              borderRadius: 10,
            }}
            title="Change"
          ></Button>
          <Button
            style={{ fontSize: 20, backgroundColor: "green", padding: 30 }}
            title="Remove"
          ></Button>
        </View>
      </View>
    );

    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyl={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  //main return
  return (
    <SafeAreaView style={styles.container}>
      {renderMainCategories()}
      {renderMainButton()}
      {renderLocationList()}
      {popUpAddLocation()}
      {LoadingIcon()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDFCFF",
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    margin: 10,
    borderColor: "#000080",
  },
  shadow: {
    shadowColor: "#000080",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },

  //Add location
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
  //Add location
});

export default TourPlanMap;
