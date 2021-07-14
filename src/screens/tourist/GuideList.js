import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/asse/colors/colors";
import Entypo from "react-native-vector-icons/Entypo";

const height = Dimensions.get("window").height;

const GuideList = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.image}
        style={styles.backgroundImage}
      ></ImageBackground>
      <View style={styles.descriptionWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name="heart" size={32} color={colors.darkRed} />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name="location-pin" size={24} color={colors.darkGray} />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
        <View style={styles.discriptionWrapper}>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>PRICE</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>${item.price}</Text>
              <Text style={styles.infoSubText}> /person</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>RATING</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.rating}</Text>
              <Text style={styles.infoSubText}> /5</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>Duration</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.rating}</Text>
              <Text style={styles.infoSubText}> hours</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => alert("You Booked a Guided Tour")}
        >
          <Text style style={styles.buttonText}>
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
  },
  backgroundImage: {
    height: height * 0.4,
  },
  descriptionWrapper: {
    flex: 1,
    backgroundColor: colors.lightBlue,
    marginTop: -20,
  },
  titleWrapper: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  itemTitle: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: colors.darkBlue,
    fontWeight: "bold",
  },
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  locationText: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: colors.darkGray,
  },
  heartWrapper: {
    position: "absolute",
    right: 40,
    top: -30,
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  discriptionWrapper: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  descriptionText: {
    fontFamily: "Roboto",
    fontSize: 15,
    color: colors.black,
    height: 85,
  },
  infoWrapper: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  infoItem: {},
  infoTitle: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: colors.darkGray,
  },
  infoTextWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 5,
  },
  infoText: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "bold",
    color: colors.darkBlue,
  },
  infoSubText: {
    fontFamily: "Roboto",
    fontSize: 14,
    color: colors.darkGray,
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: colors.darkBlue,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: colors.white,
  },
});

export default GuideList;
