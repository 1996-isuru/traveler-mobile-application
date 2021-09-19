import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Modal,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {
  COLORS,
  FONTS,
  icons,
  SIZES,
  GOOGLE_API_KEY,
  images,
  localhost,
} from "../../../../constants/index";

const FinalizeMapView = ({ route, navigation }) => {
  const affordable = 1;
  const restaurantt = {
    id: 1,
    name: "ByProgrammers Burger",
    rating: 4.8,
    categories: [5, 7],
    priceRating: affordable,
    photo: images.burger_restaurant_1,
    duration: "30 - 45 min",
    location: {
      latitude: 7.2905715,
      longitude: 80.6337262,
    },
    courier: {
      avatar: images.main,
      name: "Amy",
    },
    menu: [
      {
        menuId: 1,
        name: "Crispy Chicken Burger",
        photo: images.main,
        description: "Burger with crispy chicken, cheese and lettuce",
        calories: 200,
        price: 10,
      },
      {
        menuId: 2,
        name: "Crispy Chicken Burger with Honey Mustard",
        photo: images.main,
        description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
        calories: 250,
        price: 15,
      },
      {
        menuId: 3,
        name: "Crispy Baked French Fries",
        photo: images.main,
        description: "Crispy Baked French Fries",
        calories: 194,
        price: 8,
      },
    ],
  };

  // const currentLocation = {
  //   streetName: "Kuching",
  //   gps: {
  //     latitude: 7.550534499999999,
  //     longitude: 80.1908642,
  //   },
  // };

  const mapView = React.createRef();
  const [fromLocation, setFromLocation] = React.useState(null);
  const [toLocation, setToLocation] = React.useState(null);
  const [region, setRegion] = React.useState(null);
  const [duration, setDuration] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);

  //loading icon
  const [isloadingCreateTour, setIsloadingCreateTour] = useState(true);

  React.useEffect(() => {
    getMapDetails();
    const currentLocation = {
      gps: {
        latitude: 7.2905715,
        longitude: 80.6337262,
      },
    };
    const toLocation = {
      location: {
        latitude: 7.550534499999999,
        longitude: 80.1908642,
      },
    };
    // console.log(currentLocation.gps);
    let fromLoc = currentLocation.gps;
    let toLoc = toLocation.location;
    console.log(fromLoc);
    console.log(toLoc);
    setToLocation(toLoc);
    setFromLocation(fromLoc);
    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    };
    setRegion(mapRegion);
  }, []);

  function getMapDetails() {
    let { tourId, tourprofileid } = route.params;
    console.log("object_id", tourId);
    console.log("tourprofileid", tourprofileid);
    fetch(localhost + "/tourplan/rendermap", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tourId,
        tourprofileid,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "get_map_details") {
          console.log(result.tourStart.latitude);
          console.log(result.tourStart.longitude);
          console.log(result.tourEnd.latitude);
          console.log(result.tourEnd.longitude);
          setIsloadingCreateTour(false);
        } else {
          console.log(result);
          Alert.alert("No created tours");
        }
      });
  }

  // if (!region && !fromLocation & !toLocation) {

  // }

  function zoomIn() {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    };

    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  }

  function zoomOut() {
    let newRegion = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    };

    setRegion(newRegion);
    mapView.current.animateToRegion(newRegion, 200);
  }

  function renderMap() {
    // console.log(tourId);
    // console.log(tourprofileid);
    console.log("ddd", toLocation);
    console.log("from location", fromLocation);
    const destinationMarker = () => (
      <Marker coordinate={toLocation}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.white,
          }}
        >
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
            }}
          >
            <Image
              source={icons.pin}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.white,
              }}
            />
          </View>
        </View>
      </Marker>
    );

    const carIcon = () => (
      <Marker
        coordinate={fromLocation}
        anchor={{ x: 0.5, y: 0.5 }}
        flat={true}
        // rotation={angle}
      >
        <Image
          source={icons.book}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </Marker>
    );

    return (
      <View style={{ flex: 1 }}>
        <MapView
          ref={mapView}
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={{ flex: 1 }}
        >
          <MapViewDirections
            origin={fromLocation}
            destination={toLocation}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor={COLORS.primary}
            optimizeWaypoints={true}
            onReady={(result) => {
              setDuration(result.duration);

              if (!isReady) {
                // Fit route into maps
                mapView.current.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: SIZES.width / 20,
                    bottom: SIZES.height / 4,
                    left: SIZES.width / 20,
                    top: SIZES.height / 8,
                  },
                });

                // Reposition the car
                let nextLoc = {
                  latitude: result.coordinates[0]["latitude"],
                  longitude: result.coordinates[0]["longitude"],
                };

                setFromLocation(nextLoc);
                setIsReady(true);
              }
            }}
          />
          {destinationMarker()}
          {fromLocation ? carIcon() : null}
        </MapView>
      </View>
    );
  }

  function renderDestinationHeader() {
    return (
      <View
        style={{
          position: "absolute",
          top: 50,
          left: 0,
          right: 0,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: SIZES.width * 0.9,
            paddingVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding * 2,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}
        >
          <Image
            source={icons.book}
            style={{
              width: 30,
              height: 30,
              marginRight: SIZES.padding,
            }}
          />

          <View style={{ flex: 1 }}>
            <Text style={{ ...FONTS.body3 }}>narammla</Text>
          </View>

          <Text style={{ ...FONTS.body3 }}>{Math.ceil(duration)} mins</Text>
        </View>
      </View>
    );
  }

  function renderButtons() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: SIZES.height * 0.35,
          right: SIZES.padding * 2,
          width: 60,
          height: 130,
          justifyContent: "space-between",
        }}
      >
        {/* Zoom In */}
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.white,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => zoomIn()}
        >
          <Text style={{ ...FONTS.body1 }}>+</Text>
        </TouchableOpacity>

        {/* Zoom Out */}
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.white,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => zoomOut()}
        >
          <Text style={{ ...FONTS.body1 }}>-</Text>
        </TouchableOpacity>
      </View>
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
    <View style={{ flex: 1 }}>
      {LoadingIcon()}
      {renderMap()}
      {renderDestinationHeader()}
      {renderButtons()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});

export default FinalizeMapView;
