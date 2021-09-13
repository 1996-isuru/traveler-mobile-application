import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {
  COLORS,
  FONTS,
  icons,
  SIZES,
  GOOGLE_API_KEY,
} from "../../../../constants/index";

const FinalizeMapView = () => {
  const mapView = React.useRef();

  const [streetName, setStreetName] = React.useState("");
  const [fromLocation, setFromLocation] = React.useState(null);
  const [toLocation, setToLocation] = React.useState(null);
  const [region, setRegion] = React.useState(null);

//   const [duration, setDuration] = React.useState(0);
//   const [isReady, setIsReady] = React.useState(false);
//   const [angle, setAngle] = React.useState(0);

  React.useEffect(() => {
    const initialCurrentLocation = {
      streetName: "Kuching",
      gps: {
        latitude: 1.5496614931250685,
        longitude: 110.36381866919922,
      },
      location1: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      location2: {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
      },
      markers: [{
        title: 'narammala',
        coordinates: {
          latitude: 3.148561,
          longitude: 101.652778
        },
      },
      {
        title: 'Katupotha',
        coordinates: {
          latitude: 3.149771,
          longitude: 101.655449
        },  
      }]

    };

    let fromLoc = initialCurrentLocation.gps;
    let toLoc = initialCurrentLocation.location1;
    let street = initialCurrentLocation.streetName;
    // let loc2 = initialCurrentLocation.location2;

    let mapRegion = {
      latitude: (fromLoc.latitude + toLoc.latitude) / 2,
      longitude: (fromLoc.longitude + toLoc.longitude) / 2,
      latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
      longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2,
    };

    setStreetName(street);
    setFromLocation(fromLoc);
    setToLocation(toLoc);
    setRegion(mapRegion);
    console.log(streetName);
  }, []);

  function renderMap() {
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
              source={icons.cafe}
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
          source={icons.camp}
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
          />
          {destinationMarker()}
          {carIcon()}
        </MapView>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {renderMap()}
    </View>
  );
};

export default FinalizeMapView;
