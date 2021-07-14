import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Alert,
} from "react-native";
import RadioButtonRN from "radio-buttons-react-native";
import {
  icons,
  images,
  SIZES,
  COLORS,
  FONTS,
  localhost,
} from "../../constants/index";
import { RadioButton } from "react-native-paper";

const SignUp = ({ navigation }) => {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [reEnterPassword, setreEnterPassword] = useState(null);
  // const [type, setType] = useState(null);
  const [checked, setChecked] = useState(null);

  const registerUserAccount = () => {
    console.log(
      JSON.stringify({ userName, email, password, reEnterPassword, checked })
    );

    if (!userName || !email || !password || !reEnterPassword || !checked) {
      Alert.alert("Please fill all fields.");
    } else {
      if (password == reEnterPassword) {
        fetch(localhost + "/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName, email, password, checked }),
        });
        navigation.navigate("SignIn");
      } else {
        Alert.alert("Password are not same.");
      }
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
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.navy,
            textAlign: "center",
            fontSize: 30,
            marginTop: -130,
          }}
        >
          SIGN UP
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...FONTS.body2 }}>Tourist</Text>
              <RadioButton
                value="tourist"
                status={checked === "tourist" ? "checked" : "unchecked"}
                onPress={() => setChecked("tourist")}
              />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...FONTS.body2 }}>Tour Guide</Text>
              <RadioButton
                value="tourGuide"
                status={checked === "tourGuide" ? "checked" : "unchecked"}
                onPress={() => setChecked("tourGuide")}
              />
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...FONTS.body2 }}>Hotel Management</Text>
              <RadioButton
                value="hotelManagement"
                status={checked === "hotelManagement" ? "checked" : "unchecked"}
                onPress={() => setChecked("hotelManagement")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ padding: 10 }}>
            <Text style={styles.text_footer}>User Name</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="User Name"
                style={styles.TextInput}
                onChangeText={(userName) => setUserName(userName)}
              />
            </View>
          </View>
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
          <View style={{ padding: 10 }}>
            <Text style={styles.text_footer}>Re-Enter Password</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="Re-Enter Password"
                style={styles.TextInput}
                onChangeText={(reEnterPassword) =>
                  setreEnterPassword(reEnterPassword)
                }
              />
            </View>
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
            onPress={registerUserAccount}
          >
            <Text style={{ ...FONTS.h1, color: COLORS.white }}>Sign Up</Text>
          </TouchableOpacity>
          {/* {error.id === 'REGISTER_FAIL'? (
            <>{error.msg.msg ? <Text variant="smtitle"
            color= {COLORS.navy}
            textTransform="uppercase"
            fontSize={12}
            marginBottom="m">
              {error.msg.msg}
            </Text> : null}</>
          ) : null} */}
        </View>
      </View>
    </View>
  );
};

export default SignUp;

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
