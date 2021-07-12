import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import SignIn from "../screens/signIn_signUp/SignInScreen.js";
import SignUp from "../screens/signIn_signUp/SignUpScreen.js";
import Splash from "../screens/signIn_signUp/SplashScreen";
import HotelOwner from "../screens/users/hotelOwner.js";
import Guide from "../screens/users/guide.js";
import Tourist from "../screens/users/tourist.js";
import Map from "../screens/create_trip/main_map";

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
    </Stack.Navigator>
  );
};

export default Sign_up_navigation;
