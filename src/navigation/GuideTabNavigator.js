import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

import GuideHome from '../screens/guide/GuideHome';
import Map from "../screens/maps/main_map";
import GuideProfile from "../screens/guide/GuideProfile";
import colors from "../assets/asse/colors/colors";
import prePlanTripData from '../screens/pre-define-trip/preDefineTrips';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

const GuideTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBar,
        activeTintColor: colors.white,
        inactiveTintColor: colors.white,
        showLabel: false,
      }}
      initialRouteName={"GuideHome"}
    >
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="map" size={32} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="GuideHome"
        component={GuideHome}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="prePlanTripData"
        component={prePlanTripData}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="GuideProfile"
        component={GuideProfile}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="user" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.blue,
  },
});

export default GuideTabNavigator;
