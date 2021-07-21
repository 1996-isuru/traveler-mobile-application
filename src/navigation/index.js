import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Sign_up_navigation from "./Sign-up-navigation";
import TouristTabNavigator from "./TouristTabNavigator";
import AuthNavigator from "./AuthNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import GuideTabNavigator from "./GuideTabNavigator";
const MainStack = createStackNavigator();


const AppNavContainer = () => {
  //getting async storage data
//   const [userToken, setToken] = useState(null);
//   const [isLogin, setisLogin] = useState(false);
//   const [userName, setUserName] = useState(null);

//   React.useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     try {
//       const token = await AsyncStorage.getItem("token");
//       //  const userName = await AsyncStorage.getItem("userName");
//       //  const email = await AsyncStorage.getItem("userEmail");

//       setToken(token);
//       //  setEmail(email);
//       //  setUserName(userName);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   if (userToken != null) {
//     setisLogin = true;
//   }
  //getting async storage data

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={"AuthNavigator"}>
       <MainStack.Screen 
           name="Auth"
           component={AuthNavigator}
       />
       <MainStack.Screen 
           name="TouristTabNavigator"
           component={TouristTabNavigator}
       />
       <MainStack.Screen 
           name="GuideTabNavigator"
           component={GuideTabNavigator}
       />
        {/* <Sign_up_navigation /> */}
        {/* {isLogin ? <TouristTabNavigator /> : <Sign_up_navigation /> } */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavContainer;
