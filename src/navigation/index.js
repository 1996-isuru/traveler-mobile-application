import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

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

const Stack = createStackNavigator();

const AppNavContainer = () => {
  //getting async storage data
  console.log("started index routeee");
  const [userToken, setToken] = useState(null);
  const [userType, setUserType] = useState(null);
  const [intialRoute, setIntialRoute] = useState(null);

  useEffect(() => {
    console.log("useeffect");
    getData();
    // checkLogin();
  }, []);

  const getData = async () => {
    console.log("getdata");
    try {
      const token = await AsyncStorage.getItem("token");
      const type = await AsyncStorage.getItem("userType");
      setToken(token);
      setUserType(type);
      if (userToken != null) {
        if (userType == "tourist") {
          setIntialRoute("TouristHome");
        } else if (userType == "hotelManagement") {
          setIntialRoute("hotelManagement");
        } else {
          setIntialRoute("guide");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack.Navigator>
      {userToken == null ? (
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
      ) : (
        <>
          {intialRoute === "tourist" ? (
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
                name="HotelHome"
                component={HotelTabNavigator}
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
                name="GuideAddListDet"
                component={GuideAddListDet}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="HotelPackageDetals"
                component={HotelPackageDetals}
              />
            </>
          ) : (
            <>
              {intialRoute === "hotelManagement" ? (
                <>
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="HotelHome"
                    component={HotelTabNavigator}
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
                    name="GuideAddListDet"
                    component={GuideAddListDet}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="HotelPackageDetals"
                    component={HotelPackageDetals}
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
                    name="HotelHome"
                    component={HotelTabNavigator}
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
                    name="GuideAddListDet"
                    component={GuideAddListDet}
                  />
                  <Stack.Screen
                    options={{ headerShown: false }}
                    name="HotelPackageDetals"
                    component={HotelPackageDetals}
                  />
                </>
              )}
            </>
          )}
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavContainer;
