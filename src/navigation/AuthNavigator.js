import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/signIn_signUp/SignInScreen.js";
import SignUp from "../screens/signIn_signUp/SignUpScreen.js";
import Splash from "../screens/signIn_signUp/SplashScreen";

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName={"Splash"}>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={Splash}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUp}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
