import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

import TouristHome from "../screens/tourist/TouristHome";
import Map from "../screens/maps/main_map";
import TouristProfile from "../screens/tourist/TouristProfile";
import colors from "../assets/asse/colors/colors";
import prePlanTripData from "../screens/pre-define-trip/preDefineTrips";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
// import 'react-native-gesture-handler';

import GuideList from "../screens/tourist/GuideList.js";
import HotelList from "../screens/hotelPackagesScreen/HoteList";

const Tab = createBottomTabNavigator();
const TouristStack = createStackNavigator();
const TouristProfileStack = createStackNavigator();

const TouristTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.white,
        inactiveTintColor: colors.white,
        showLabel: false,
      }}
      initialRouteName={"TouristHome"}
    >
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="map" size={32} color={color} />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="TouristHome"
        component={TouristHome}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      >
        {/* {() => (
          <TouristStack.Navigator>
            <TouristHome.Screen
              options={{ headerShown: false }}
              name="GuideList"
              component={GuideList}
            />
            <TouristHome.Screen
              options={{ headerShown: false }}
              name="HotelList"
              component={HotelList}
            />
          </TouristStack.Navigator>
        )} */}
      </Tab.Screen>

      <Tab.Screen
        name="prePlanTripData"
        component={prePlanTripData}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="TouristProfile"
        component={TouristProfile}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="user" size={32} color={color} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.blue,
  },
});

export default TouristTabNavigator;
