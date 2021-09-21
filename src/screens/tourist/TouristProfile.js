import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { images, SIZES, COLORS, FONTS, localhost } from "../../constants/index";
// import { StackActions, NavigationActions } from 'react-navigation';

export default TouristProfile = ({ navigation }) => {
  const logOut = async () => {
    try {
      await AsyncStorage.removeItem("token");
      navigation.reset({
        index: 0,
        routes: [{ name: "SignIn" }],
      });
    } catch (exception) {
      return false;
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "#48d1cc",
          borderColor: "#48d1cc",
          borderWidth: 1,
          marginTop: 10,
        }}
        onPress={logOut}
      >
        <Text style={{ ...FONTS.h1, color: COLORS.white }}>Sign out</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={{
            uri: "http://res.cloudinary.com/dj0sdfwat/image/upload/v1632043821/agwro1cfydzyi9d3macz.jpg",
          }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>mHotel</Text>
            <Text style={styles.info}>Colombo</Text>
            <Text style={styles.description}>
              A hotel is an establishment that provides paid lodging on a
              short-term basis, high-end hotels have custom decorated rooms.
            </Text>

            <TouchableOpacity
              style={styles.buttonContainer}
              // onPress={() => navigation.navigate("HotelPhotos")}
            >
              <Text>View Photos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              // onPress={() => navigation.navigate("HotelEdit")}
            >
              <Text>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              // onPress={() => navigation.navigate("VerificationSubmit")}
            >
              <Text>Verify Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
  },
  info: {
    fontSize: 16,
    color: "#00BFFF",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});
