import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { images, SIZES, COLORS, FONTS, localhost } from "../../constants/index";
// import { StackActions, NavigationActions } from 'react-navigation';

export default TouristProfile = ({navigation}) => {

  const logOut = async () => {
     
      try {
          await AsyncStorage.removeItem("token");
          navigation.reset({
            index: 0,
            routes: [{ name: 'SignIn' }],
          });
      }
      catch(exception) {
          return false;
      }
  
  }

  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: "#48d1cc",
          borderColor: "#48d1cc",
          borderWidth: 1,
          marginTop: 10,
        }}
        onPress={logOut}
      >
        <Text style={{ ...FONTS.h1, color: COLORS.white }}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};
