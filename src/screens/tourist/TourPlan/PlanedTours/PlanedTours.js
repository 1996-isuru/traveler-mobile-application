import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
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

const PlanedTours = ({ navigation }) => {
  return (
    <Container>
      <FlatList
        data={Messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            onPress={() =>
              navigation.navigate("TourPlanMap", { userName: item.userName })
            }
          >
            <UserInfo>
              <UserImgWrapper>
                <UserImg source={images.avatar_1} />
              </UserImgWrapper>
              <TextSection>
                <UserInfoText>
                  <UserName>{item.userName}</UserName>
                  <PostTime>{item.messageTime}</PostTime>
                </UserInfoText>
                <MessageText>{item.messageText}</MessageText>
              </TextSection>
            </UserInfo>
          </Card>
        )}
      />
    </Container>
  );
};

export default PlanedTours;
