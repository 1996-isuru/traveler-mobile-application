import { setStatusBarBackgroundColor } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Alert,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const VerificationSubmit = ({ navigation }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [facilities, setFacilities] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);

  const submitData = () => {
    fetch("http://10.0.2.2:3000/hotelPackage/add", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        price,
        facilities,
        picture,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Alert.alert(`${(data = name)} is saved successfully`);
        navigation.navigate("packagesHotel");
      })
      .catch((err) => {
        Alert.alert("something went wrong");
      });
  };

  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaType: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")[1]}`,
        };
        handleUpload(newfile);
      }
    } else {
      Alert.alert(
        "Sorry, you must grant camera roll permissions in order to do this."
      );
    }
  };
  const pickFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      let data = await ImagePicker.launchCameraAsync({
        mediaType: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      // if(!data.cancelled){
      //     let newfile = { uri:data.uri,
      //                     type:'test/${data.uri.split(".")[1]}',
      //                     name:'test.${data.uri.split(".")[1]}'

      // }
      if (!data.cancelled) {
        let newfile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")[1]}`,
        };
        handleUpload(newfile);
      }
    } else {
      Alert.alert(
        "Sorry, you must grant camera permissions in order to do this."
      );
    }
  };

  const handleUpload = (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "traveler");
    data.append("cloud_name", "dj0sdfwat");

    fetch("http://api.cloudinary.com/v1_1/dj0sdfwat/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPicture(data.url);
        setModal(false);
      })
      .catch((err) => {
        Alert.alert("Error while Uploading");
      });
  };

  return (
    <View style={style.root}>
      <TextInput
        label="Name of the Package"
        style={style.inputStyle}
        value={name}
        theme={theme}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        label="About Package"
        style={style.inputStyle}
        value={description}
        theme={theme}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        label="Price"
        style={style.inputStyle}
        value={price}
        theme={theme}
        keyboardType="number-pad"
        onChangeText={(text) => setPrice(text)}
      />
      <TextInput
        label="Facilities"
        style={style.inputStyle}
        value={facilities}
        theme={theme}
        onChangeText={(text) => setFacilities(text)}
      />
      <Button
        style={style.inputStyle}
        theme={theme}
        icon={picture == "" ? "upload" : "check"}
        mode="contained"
        onPress={() => setModal(true)}
      >
        Upload Image
      </Button>
      <Button
        style={style.inputStyle}
        theme={theme}
        icon="content-save"
        mode="contained"
        onPress={() => submitData()}
      >
        Save
      </Button>
      <Modal animationType="slide" transparent={true} visible={modal}>
        <View style={style.modalView}>
          <View style={style.modalButtonView}>
            <Button
              theme={theme}
              icon="camera"
              mode="contained"
              onPress={() => pickFromCamera()}
            >
              Camera
            </Button>
            <Button
              theme={theme}
              icon="image"
              mode="contained"
              onPress={() => pickFromGallery()}
            >
              Gallery
            </Button>
          </View>
          <Button theme={theme} onPress={() => setModal(false)}>
            Cancel
          </Button>
        </View>
      </Modal>
    </View>
  );
};
const theme = {
  colors: {
    primary: "#003580",
  },
};

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
    margin: 5,
  },
  modalButtonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  modalView: {
    position: "absolute",
    bottom: 2,
    width: "100%",
    backgroundColor: "#DDFCFF",
  },
});

export default VerificationSubmit;
