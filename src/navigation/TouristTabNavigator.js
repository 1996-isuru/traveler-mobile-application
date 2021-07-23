import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

import TouristHome from "../screens/tourist/TouristHome";
import Map from "../screens/maps/main_map";
import TouristProfile from "../screens/tourist/TouristProfile";
import colors from "../assets/asse/colors/colors";
import preDefineTrips from "../screens/pre-define-trip/preDefineTrips";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

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
      />

      <Tab.Screen
        name="TouristHome"
        component={TouristHome}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="preDefineTrips"
        component={preDefineTrips}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="TouristProfile"
        component={TouristProfile}
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

export default TouristTabNavigator;