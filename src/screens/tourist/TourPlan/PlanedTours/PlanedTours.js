import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  Modal,
} from "react-native";
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from "../../TouristStyle/MessageStyles";
import {
  icons,
  images,
  SIZES,
  COLORS,
  FONTS,
  localhost,
} from "../../../../constants/index";

const Messages = [
  {
    id: "1",
    userName: "Jenny Doe",
    // userImg: require('../assets/users/user-3.jpg'),
    messageTime: "4 mins ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "2",
    userName: "John Doe",
    // userImg: require('../assets/users/user-1.jpg'),
    messageTime: "2 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "3",
    userName: "Ken William",
    // userImg: require('../assets/users/user-4.jpg'),
    messageTime: "1 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "4",
    userName: "Selina Paul",
    // userImg: require('../assets/users/user-6.jpg'),
    messageTime: "1 day ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "5",
    userName: "Christy Alex",
    // userImg: require('../assets/users/user-7.jpg'),
    messageTime: "2 days ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
];

import AsyncStorage from "@react-native-async-storage/async-storage";

const PlanedTours = ({ route, navigation }) => {
  const [isloadingCreateTour, setIsloadingCreateTour] = useState(true);
  const [tourprofileid, settourprofileid] = useState(null);

  //getting async storage data
  const [userEmail, setEmail] = useState(null);
  const [receivedTripList, setReceivedTripList] = useState(null);
  useEffect(() => {
    getroutedata();
  }, [getroutedata]);
  //getting async storage data

  const getroutedata = async () => {
    let { userEmail } = route.params;
    setEmail(userEmail);
    console.log("s");
    console.log(userEmail);
    fetch(localhost + "/tourplan/showtourlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail,
      }),
    })
      .then((res) => res.json())
      .then(async (result) => {
        if (result.message === "No created tours") {
          setIsloadingCreateTour(false);
          Alert.alert("No created tours");
        } else {
          settourprofileid(result.message._id);
          // console.log(result.message._id);
          setReceivedTripList(result.message.tours);
          if (setIsloadingCreateTour) {
            setIsloadingCreateTour(false);
            // Alert.alert("have a create tour");
          }
        }
      });
  };

  //tourlist function
  function rendertourList() {
    // console.log("kkkkkkkkkkk");
    // console.log(receivedTripList);
    const renderItem = ({ item }) => (
      <Container>
        <Card
          onPress={() => {
            let object_id = item._id;
            // console.log(object_id);
            navigation.navigate("TourPlanMap", { object_id, tourprofileid });
          }}
        >
          <UserInfo>
            <UserImgWrapper>
              <UserImg source={images.avatar_1} />
            </UserImgWrapper>
            <TextSection>
              <UserInfoText>
                <UserName>{item.planTourName}</UserName>
                <PostTime>{item.planTourName}</PostTime>
              </UserInfoText>
              <MessageText>{item.planTourName}</MessageText>
            </TextSection>
          </UserInfo>
        </Card>
      </Container>
    );

    return (
      <FlatList
        data={receivedTripList}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
      />
    );
  }

  function LoadingIcon() {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isloadingCreateTour}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              flexDirection: "row",
              justifyContent: "space-around",
              padding: 10,
            }}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </Modal>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {rendertourList()}
      {LoadingIcon()}
    </SafeAreaView>
  );
};

export default PlanedTours;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDFCFF",
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    margin: 10,
    borderColor: "#000080",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  }
  //Add location
});
