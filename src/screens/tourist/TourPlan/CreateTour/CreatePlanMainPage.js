import React, { useState } from "react";
import {
  icons,
  images,
  SIZES,
  COLORS,
  FONTS,
} from "../../../../constants/index";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Button,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";

const prePlanTripData = [
  {
    id: 1,
    name: "Colombo to Jaffa",
    photo: images.trip1,
    duration: "3 Days",
    lenth: "200Km",
    location: {
      latitude: 1.5347282806345879,
      longitude: 110.35632207358996,
    },
    photo: [
      {
        photo: images.trip2,
      },
      {
        photo: images.trip3,
      },
      {
        photo: images.trip4,
      },
    ],
  },
  {
    id: 2,
    name: "Colombo To NuwaEliya",
    photo: images.trip4,
    duration: "2 Days",
    lenth: "200Km",
    location: {
      latitude: 1.556306570595712,
      longitude: 110.35504616746915,
    },
    photo: [
      {
        photo: images.trip5,
      },
      {
        photo: images.trip6,
      },
      {
        photo: images.trip7,
      },
      {
        photo: images.trip1,
      },
    ],
  },
  {
    id: 3,
    name: "Colombo to Kandy",
    photo: images.trip4,
    duration: "4 Days",
    lenth: "200Km",
    location: {
      latitude: 1.5238753474714375,
      longitude: 110.34261833833622,
    },
    photo: [
      {
        photo: images.trip7,
      },
    ],
  },
  {
    id: 4,
    name: "Colombo to Anuradhapura",
    photo: images.trip8,
    duration: "2 Days",
    lenth: "200Km",
    location: {
      latitude: 1.5578068150528928,
      longitude: 110.35482523764315,
    },
    photo: [
      {
        photo: images.sushi,
      },
    ],
  },
  {
    id: 5,
    name: "Colombo to Katharagama",
    photo: images.trip11,
    duration: "5 Days",
    lenth: "200Km",
    location: {
      latitude: 1.558050496260768,
      longitude: 110.34743759630511,
    },
    photo: [
      {
        photo: images.trip12,
      },
      {
        photo: images.trip11,
      },
      {
        photo: images.trip10,
      },
      {
        photo: images.trip9,
      },
    ],
  },
  {
    id: 6,
    name: "Kurunegala to Mathara",
    photo: images.trip9,
    duration: "5 Days",
    lenth: "200Km",
    location: {
      latitude: 1.5573478487252896,
      longitude: 110.35568783282145,
    },
    photo: [
      {
        photo: images.trip1,
      },
      {
        photo: images.trip2,
      },
      {
        photo: images.trip12,
      },
    ],
  },
];

const TourPlanMap = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [restaurants, setRestaurants] = useState(prePlanTripData);

  //renderMainCategory function start
  function renderMainCategories() {
    return (
      <View style={{ padding: SIZES.padding * 2, marginTop: 25 }}>
        <Text style={{ ...FONTS.h2, textAlign: "center" }}>Plan your tour</Text>
      </View>
    );
  }

  function renderRestaurantList() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding * 2,
          flex: 1,
          // justifyContent: "space-between",
          backgroundColor: "#ffff",
          borderColor: "#000080",
          padding: 25,
          marginLeft: 5,
          marginRight: 5,
          borderRadius: 30,
          marginTop: 20,
        }}
        onPress={() => {
          navigation.navigate("PreDefineTripDetails");
        }}
      >
        {/* trip info */}
        <Text style={{ ...FONTS.h4 }}>{item.name}</Text>
        <View
          style={{
            flexDirection: "row",
            paddingTop: 30,
            justifyContent: "space-between",
          }}
        >
          <Button
            style={{
              fontSize: 20,
              backgroundColor: "02B3C5",
              padding: 90,
              borderRadius: 10,
            }}
            title="Change"
          ></Button>
          <Button
            style={{ fontSize: 20, backgroundColor: "green", padding: 30 }}
            title="Remove"
          ></Button>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyl={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30,
        }}
      />
    );
  }

  //main return
  return (
    <SafeAreaView style={styles.container}>
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

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
  shadow: {
    shadowColor: "#000080",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default TourPlanMap;
