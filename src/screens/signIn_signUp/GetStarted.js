import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
} from "react-native";
import {
  images,
  SIZES,
  COLORS,
  FONTS,
  localhost,
  icons,
} from "../../constants/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

const GetStarted = ({ route, navigation }) => {
  const [living, setLiving] = useState(null);
  const [email, setEmail] = useState(null);
  const [bio, setBio] = useState(null);
  const [profilePic, setProfilePic] = useState(
    "file:///data/user/0/host.exp.exponent/cache/ExperienceData/UNVERIFIED-192.168.8.126-traveler-mobile-application/ImagePicker/6104bf06-dd30-45d7-8cf6-3500d9fa1b30.jpg"
  );

  const [userName, setUserName] = useState(null);
  const [userType, setUsertype] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  // useEffect(() => {
  //   console.log("iiiiiiiiii");
  //   let { userName, email, checked } = route.params;

  //   setEmail(email);
  //   setUserName(userName);
  //   setUsertype(checked);
  // });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const userName1 = await AsyncStorage.getItem("userName");
      const email1 = await AsyncStorage.getItem("userEmail");
      const type1 = await AsyncStorage.getItem("userType");

      setEmail(email1);
      setUserName(userName1);
      setUsertype(type1);
    } catch (error) {
      console.log(error);
    }
  };

  //pickImag from gallery
  const pickImageGallery = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
    }
    let data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setProfilePic(data.uri);
    setModalVisible(false);
    if (!data.cancelled) {
      let newfile = {
        uri: data.uri,
        type: `test/${data.uri.split(".")[1]}`,
        name: `test.${data.uri.split(".")[1]}`,
      };
      handleUpload(newfile);
    }
  };

  //pickImag from camera
  const pickImageCamera = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
    }
    let data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setProfilePic(data.uri);
    setModalVisible(false);
    if (!data.cancelled) {
      let newfile = {
        uri: data.uri,
        type: `test/${data.uri.split(".")[1]}`,
        name: `test.${data.uri.split(".")[1]}`,
      };
      handleUpload(newfile);
    }
  };

  const handleUpload = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "traveler");
    data.append("cloud_name", "dv4fzdix5");

    fetch("https://api.cloudinary.com/v1_1/dv4fzdix5/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const getStarted = async () => {
    console.log(JSON.stringify({ email, living, bio, profilePic }));

    fetch(localhost + "/user/getstarted", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, living, bio, profilePic }),
    })
      .then((res) => res.json())
      .then(async (result) => {
        if (userType == "tourist") {
          // navigation.navigate("TouristHome");
          navigation.reset({
            index: 0,
            routes: [{ name: "TouristHome" }],
          });
        } else if (userType == "hotelManagement") {
          // navigation.navigate("HotelHome");
          navigation.reset({
            index: 0,
            routes: [{ name: "HotelHome" }],
          });
        } else {
          // navigation.navigate("GuideHome");
          navigation.reset({
            index: 0,
            routes: [{ name: "GuideHome" }],
          });
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={images.main} />
      </View>
      <View style={styles.footer}>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.navy,
            textAlign: "center",
            fontSize: 30,
            marginTop: -140,
          }}
        >
          Welcome
        </Text>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.navy,
            textAlign: "center",
            fontSize: 20,
          }}
        >
          {userName}
        </Text>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.navy,
            textAlign: "center",
            fontSize: 23,
          }}
        >
          Lets Setup Your Profile
        </Text>
        <View style={{ flex: 1, paddingTop: 50 }}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={{ alignItems: "center" }}>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  borderColor: COLORS.black,
                }}
                source={{ uri: profilePic }}
              />
            </View>
          </TouchableOpacity>

          <View style={{ padding: 10 }}>
            <Text style={styles.text_footer}>Add living in</Text>
            <View style={styles.action}>
              <TextInput
                // placeholder="Add living in"
                style={styles.TextInput}
                onChangeText={(living) => setLiving(living)}
              />
            </View>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={styles.text_footer}>Add bio</Text>
            <View style={styles.action}>
              <TextInput
                // placeholder="Add bio"
                style={styles.TextInput}
                onChangeText={(bio) => setBio(bio)}
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
            onPress={getStarted}
          >
            <Text style={{ ...FONTS.h1, color: COLORS.white }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <View style={styles.modalButtonView}>
              <TouchableOpacity
                style={[
                  styles.signIn,
                  {
                    backgroundColor: COLORS.lightGray,
                    borderColor: COLORS.lightGray,
                    borderWidth: 1,
                    marginTop: 10,
                    flexDirection: "row",
                  },
                ]}
                onPress={() => pickImageGallery()}
              >
                <Image
                  source={icons.gallery}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.black,
                  }}
                />
                <Text style={{ ...FONTS.h3, color: COLORS.black }}>
                  Add a photo
                </Text>
              </TouchableOpacity>
              <View style={styles.space} />
              <TouchableOpacity
                style={[
                  styles.signIn,
                  {
                    backgroundColor: COLORS.lightGray,
                    borderColor: COLORS.lightGray,
                    borderWidth: 1,
                    marginTop: 10,
                    flexDirection: "row",
                  },
                ]}
                onPress={() => pickImageCamera()}
              >
                <Image
                  source={icons.camera}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.black,
                  }}
                />
                <Text style={{ ...FONTS.h3, color: COLORS.black }}>
                  Take a photo
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  chooseButton: {
    backgroundColor: COLORS.black,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 40,
    borderRadius: 20,
  },
  modalView: {
    // backgroundColor: COLORS.lightGray,
    position: "absolute",
    bottom: 2,
    width: "100%",
    height: 150,
  },
  modalButtonView: {
    // backgroundColor: COLORS.lightGray,
    paddingBottom: 10,
    justifyContent: "space-around",
    padding: 10,
  },
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
