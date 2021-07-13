import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import SignIn from "../screens/signIn_signUp/SignInScreen.js";
import SignUp from "../screens/signIn_signUp/SignUpScreen.js";
import Splash from "../screens/signIn_signUp/SplashScreen";
import HotelOwner from "../screens/users/hotelOwner.js";
import Guide from "../screens/users/guide.js";
import Tourist from "../screens/users/tourist.js";
import Map from "../screens/maps/main_map";
import PreDefineTrips from "../screens/pre-define-trip/preDefineTrips";
import PreDefineTripDetails from "../screens/pre-define-trip/preDefineTripDetails";
import TouristHome from "../screens/tourist/TouristHome";
import GuideList from "../screens/tourist/GuideList.js";
import HotelList from "../screens/hotelPackagesScreen/HoteList";
import TabNavigator from "../navigation/TabNavigator";
import GuideHome from '../screens/guide/GuideHome';
import HotelOwnerHome from "../screens/hotelOwner/HotelOwnerHome.js";

const Sign_up_navigation = () => {
  return (
    <Stack.Navigator initialRouteName={"Splash"}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="TouristHome"
        component={TabNavigator}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="TouristProfile"
        component={TouristProfile}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="GuideList"
        component={GuideList}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="HotelList"
        component={HotelList}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="HotelOwner"
        component={HotelOwner}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Guide"
        component={Guide}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Tourist"
        component={Tourist}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Map"
        component={Map}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PreDefineTripDetails"
        component={PreDefineTripDetails}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="PreDefineTrips"
        component={PreDefineTrips}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="GuideHome"
        component={GuideHome}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="HotelOwnerHome"
        component={HotelOwnerHome}
      />
      {/* <Stack.Screen
        options={{ headerShown: false }}
        name="HotelPackages"
        component={HotelPackages}
      /> */}
      {/* <Stack.Screen
        options={{ headerShown: false }}
        name="HotelPackageDetails"
        component={HotelPackageDetails}
      /> */}
    </Stack.Navigator>
  );
};

export default Sign_up_navigation;
