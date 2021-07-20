import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from "../../constants/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = ({ navigation }) => {
  // const checkAsync = () => {
  //   return(
  //     retrieveData = async () => {
  //       try {
  //         let token = await AsyncStorage.getItem("token");

  //         if(token == null){
  //           console.log("dddddddd");
  //         } else {
  //           // navigation.navigate("TouristHome");
  //         }
  //       }
  //       catch(e) {
  //         console.log(e);
  //       }
  //     }
  //   )
  // }

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      // AsyncStorage.getItem('token')
      //     .then(value => {
      //         if (value != null) {
      //            console.log(value);
      //             navigation.navigate('SignUp');
      //         }
      //     })
      let token = AsyncStorage.getItem("token");
      let userType =  AsyncStorage.getItem("userType");

      if (token != null) {
        if (userType == "tourist") {
          navigation.navigate("TouristHome");
        } else if (userType == "HotelOwner") {
          navigation.navigate("HotelHome");
        } else if (userType == "tourGuide") {
          navigation.navigate("GuideHome");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={images.main}
          // style={styles.footer}
        />
      </View>
      <View style={styles.footer}>
        <View style={{ flexDirection: "row", position: "absolute" }}>
          <View style={{ paddingTop: 90, padding: 70 }}>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={{ ...FONTS.h2, color: COLORS.white }}>LOG IN</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingTop: 90,
              padding: 70,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={{ ...FONTS.h2, color: COLORS.white }}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    // flex: ,
    backgroundColor: COLORS.blmediumturquoiseue,
    borderTopLeftRadius: 30,
    height: SIZES.width * 0.4,
    borderTopRightRadius: 30,
    // paddingVertical: 0.1,
    paddingHorizontal: 30,
  },
  // logo: {
  //     width: height_logo,
  //     height: height_logo
  // },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
