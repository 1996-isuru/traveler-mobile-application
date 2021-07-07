import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Home from "../screens/Home";
import Login from "../screens/Login";


const Sign_up_navigation = () => {
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
}

export default Sign_up_navigation;
