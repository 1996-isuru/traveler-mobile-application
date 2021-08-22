import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

import SignIn from "../screens/signIn_signUp/SignInScreen.js";
import SignUp from "../screens/signIn_signUp/SignUpScreen.js";
import Splash from "../screens/signIn_signUp/SplashScreen";
import Map from "../screens/maps/main_map";
import PreDefineTrips from "../screens/pre-define-trip/preDefineTrips";
import PreDefineTripDetails from "../screens/pre-define-trip/preDefineTripDetails";
import TouristProfile from "../screens/tourist/TouristProfile";
import TouristTabNavigator from "./TouristTabNavigator";
import GuideHome from "../screens/guide/GuideHome";
// import HotelOwnerHome from "../screens/hotelOwner/HotelOwnerHome.js";
import GuideProfile from "../screens/guide/GuideProfile.js";
import GuideTabNavigator from "./GuideTabNavigator.js";
import GuideBookedDetails from "../screens/guide/GuideBookedDetails.js";
import GuideAddListDet from "../screens/guide/GuideAddDetails.js";
import GuideAddList from "../screens/guide/GuideAddList.js";
import HotelHome from "../screens/hotelOwner/HotelOwnerHome.js";
import HotelPackageDetals from "../screens/hotelOwner/HotelPackgeDeta.js";
import TouristHome from "../screens/tourist/TouristHome.js";
import HotelTabNavigator from "./HotelTabNavigator";
import GuideList from "../screens/tourist/GuideList.js";
import HotelList from "../screens/hotelPackagesScreen/HoteList";
import GetStarted from "../screens/signIn_signUp/GetStarted.js";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Stack = createStackNavigator();

const AppNavContainer = () => {
  //getting async storage data
  const [loading, setloading] = useState(true);
  const [islogged, setLogged] = useState(false);

  const [userToken, setToken] = useState("");
  const [userType, setUserType] = useState("");

  const getData = async () => {
    try {
      var jsonToken = "";
      jsonToken = await AsyncStorage.getItem("token");
      const type = await AsyncStorage.getItem("userType");
      const userName = await AsyncStorage.getItem("userName");
      const email = await AsyncStorage.getItem("userEmail");

      setToken(jsonToken);
      setUserType(type);
      console.log(userToken);
      console.log(userType);
      if (jsonToken) {
        setLogged(true);
      } else {
        setLogged(false);
      }
      setloading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, [userType]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Stack.Navigator>
          {islogged ? (
            <>
              {userType === "tourist" ? (
                <>
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="TouristHome"
                    component={TouristTabNavigator}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="TouristProfile"
                    component={TouristProfile}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="HotelList"
                    component={HotelList}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="Map"
                    component={Map}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="GuideList"
                    component={GuideList}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="PreDefineTrips"
                    component={PreDefineTrips}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="PreDefineTripDetails"
                    component={PreDefineTripDetails}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="HotelPackageDetals"
                    component={HotelPackageDetals}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="SignUp"
                    component={SignUp}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="SignIn"
                    component={SignIn}
                  />
                </>
              ) : (
                <>
                  {userType === "hotelManagement" ? (
                    <>
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="HotelHome"
                        component={HotelTabNavigator}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="Map"
                        component={Map}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="HotelList"
                        component={HotelList}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="GuideBookedDetails"
                        component={GuideBookedDetails}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="GuideAddList"
                        component={GuideAddList}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="SignUp"
                        component={SignUp}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="SignIn"
                        component={SignIn}
                      />
                    </>
                  ) : (
                    <>
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="GuideHome"
                        component={GuideTabNavigator}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="GuideList"
                        component={GuideList}
                      />

                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="Map"
                        component={Map}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="HotelList"
                        component={HotelList}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="PreDefineTrips"
                        component={PreDefineTrips}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="PreDefineTripDetails"
                        component={PreDefineTripDetails}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="GuideProfile"
                        component={GuideProfile}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="GuideBookedDetails"
                        component={GuideBookedDetails}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="GuideAddList"
                        component={GuideAddList}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="HotelPackageDetals"
                        component={HotelPackageDetals}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="SignUp"
                        component={SignUp}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="SignIn"
                        component={SignIn}
                      />
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              <Stack.Screen
                options={{ headerShown: false }}
                name="Splash"
                component={Splash}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="GetStarted"
                component={GetStarted}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="SignUp"
                component={SignUp}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="SignIn"
                component={SignIn}
              />
            </>
          )}
        </Stack.Navigator>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: Constants.statusBarHeight,
  },
});

export default AppNavContainer;
