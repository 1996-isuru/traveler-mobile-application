import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import {
  images,
  SIZES,
  COLORS,
  FONTS,
  localhost
} from "../../constants/index";

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const onLogin = () => {
    fetch(localhost + "/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result.message === "Auth successful") {
          const resUserType = result.userType;
          if (resUserType == "tourist") {
            navigation.navigate("Tourist");
          } else if (resUserType == "HotelOwner") {
            navigation.navigate("HotelOwner");
          } else if (resUserType == "tourGuide");
          navigation.navigate("Guide");
        } else{
          Alert.alert(
            "Auth faild."[
              ({
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") })
            ],
            { cancelable: false }
          );
        }
      });
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
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.navy,
            textAlign: "center",
            fontSize: 30,
            marginTop: -130,
          }}
        >
          SIGN IN
        </Text>
        <View style={{ flex: 1, paddingTop: 50 }}>
          <View style={{ padding: 10 }}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Your Email"
                style={styles.TextInput}
                onChangeText={(email) => setEmail(email)}
              />
            </View>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={styles.text_footer}>Password</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Password"
                style={styles.TextInput}
                onChangeText={(password) => setPassword(password)}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{ fontWeight: "bold", textAlign: "center", padding: 5 }}
              >
                Forget Password?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[
              styles.signIn,
              {
                backgroundColor: "#48d1cc",
                borderColor: "#48d1cc",
                borderWidth: 1,
                marginTop: 10,
              },
            ]}
            onPress={onLogin}
          >
            <Text style={{ ...FONTS.h1, color: COLORS.white }}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LogIn;

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
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 150,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    // borderBottomColor: "#f2f2f2",
    paddingBottom: 0,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
});
