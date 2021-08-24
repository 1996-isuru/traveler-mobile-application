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
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../assets/asse/colors/colors";
import profile from "../../assets/asse/images/pic.png";
// import profile from '../assets/images/pic.png';
import Entypo from "react-native-vector-icons/Entypo";

import activitiesData from "../../assets/asse/data/activitiesData";
import hotelData from "../../assets/asse/data/hotelData";
import guideData from "../../assets/asse/data/guideData";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TouristHome = ({ navigation }) => {
  //getting async storage data
  const [userToken, setToken] = useState(null);
  const [userEmail, setEmail] = useState(null);
  const [userName, setUserName] = useState(null);

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
    // console.log("sssssssssssss");
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

  return (
    <View style={styles.container}>
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
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => alert("Not Ready Yet")}
          >
            <Text style style={styles.buttonText}>
              New Trip
            </Text>
          </TouchableOpacity>
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
});
export default TouristHome;
