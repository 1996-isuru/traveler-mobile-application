import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  ScrollView,
} from "react-native";

import { icons, COLORS, SIZES, FONTS, images } from "../../constants/index";

const PreDefineTripDetails = ({ route, navigation }) => {
  const scrollX = new Animated.Value(0);
  const [trip, setTrip] = React.useState(null);
  // const [orderItems, setOrderItems] = React.useState([]);

  // React.useEffect(() => {
  //   let { item } = route.params;
  //   setTrip(item);
  // });

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", marginTop: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: SIZES.padding * 3,
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.lightGray3,
            }}
          >
            <Text style={{ ...FONTS.h3,  }}>Colombo to Kandy</Text>
          </View>
        </View>
      </View>
    );
  }

  function renderTripInfo() {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >

          <View>
            <View style={{ height: SIZES.height * 0.35 }}>
              <Image
                source={images.trip10}
                resizeMode="cover"
                style={{
                  width: SIZES.width,
                  height: "100%",
                }}
              />
            </View>
          </View>
      </Animated.ScrollView>
    );
  }

  function renderTripDetails() {
    return (
      <ScrollView style={{ marginTop: 20 }}>
        <View style={{ paddingLeft: 20, paddingRight: 10 }}>
          <Text style={{ ...FONTS.body3 }}>
            Sigiriya or Sinhagiri (Lion Rock Sinhala: සීගිරිය, Tamil:
            சிகிரியா/சிங்ககிரி, pronounced see-gi-ri-yə) is an ancient rock
            fortress located in the northern Matale District near the town of
            Dambulla in the Central Province, Sri Lanka. The name refers to a
            site of historical and archaeological significance that is dominated
            by a massive column of rock around 180 metres (590 ft) high.[2]
            According to the ancient Sri Lankan chronicle the Culavamsa, this
            site was selected by King Kashyapa (477 – 495 AD) for his new
            capital. He built his palace on the top of this rock and decorated
            its sides with colourful frescoes. On a small plateau about halfway
            up the side of this rock he built a gateway in the form of an
            enormous lion. The name of this place is derived from this structure
            — Sīnhāgiri, the Lion Rock (an etymology similar to Sinhapura, the
            Sanskrit name of Singapore, the Lion City). The capital and the
            royal palace were abandoned after the king's death. It was used as a
            Buddhist monastery until the 14th century.[3] Sigiriya today is a
            UNESCO listed World Heritage Site. It is one of the best preserved
            examples of ancient urban planning. Sigiriya or Sinhagiri (Lion Rock
            Sinhala: සීගිරිය, Tamil: சிகிரியா/சிங்ககிரி, pronounced
            see-gi-ri-yə) is an ancient rock fortress located in the northern
            Matale District near the town of Dambulla in the Central Province,
            Sri Lanka. The name refers to a site of historical and
            archaeological significance that is dominated by a massive column of
            rock around 180 metres (590 ft) high.[2] According to the ancient
            Sri Lankan chronicle the Culavamsa, this site was selected by King
            Kashyapa (477 – 495 AD) for his new capital. He built his palace on
            the top of this rock and decorated its sides with colourful
            frescoes. On a small plateau about halfway up the side of this rock
            he built a gateway in the form of an enormous lion. The name of this
            place is derived from this structure — Sīnhāgiri, the Lion Rock (an
            etymology similar to Sinhapura, the Sanskrit name of Singapore, the
            Lion City). The capital and the royal palace were abandoned after
            the king's death. It was used as a Buddhist monastery until the 14th
            century.[3] Sigiriya today is a UNESCO listed World Heritage Site.
            It is one of the best preserved examples of ancient urban planning
          </Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderTripInfo()}
      {renderTripDetails()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray2,
  },
});

export default PreDefineTripDetails;
