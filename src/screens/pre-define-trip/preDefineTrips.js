import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { COLORS, icons, images, SIZES, FONTS } from "../../constants/index";

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

const PreDefineTrips = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [restaurants, setRestaurants] = useState(prePlanTripData);

  //renderheader function statrt
  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 60,
          }}
        >
          <View
            style={{
              width: "80%",
              height: "100%",
              backgroundColor: COLORS.lightGray,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
              paddingTop: 45,
            }}
          >
            <Text style={{ ...FONTS.body2, paddingBottom: 40 }}>Search...</Text>
          </View>
        </View>
      </View>
    );
  }

  //renderMainCategory function start
  function renderMainCategories() {
    return (
      <View style={{ padding: SIZES.padding * 2, marginTop: 25 }}>
        <Text style={{ ...FONTS.h2, textAlign: "center" }}>
          Sri Lankan road trips
        </Text>
      </View>
    );
  }

  function renderRestaurantList() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ marginBottom: SIZES.padding * 2 }}
        onPress={() => {
          navigation.navigate("PreDefineTripDetails");
        }}
      >
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <Image
            source={images.trip2}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 200,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 80,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomEndRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              ...styles.shadow,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
            <Text style={{ ...FONTS.h4 }}>{item.lenth}</Text>
          </View>
        </View>

        {/* trip info */}
        <Text style={{ ...FONTS.h4 }}>{item.name}</Text>

        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: "row",
          }}
        >
          {/* rating */}
          <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>
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
      {renderHeader()}
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default PreDefineTrips;
