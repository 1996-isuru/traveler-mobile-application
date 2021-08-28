import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from "../../../constants/index";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
// import MapViewDirections from "react-native-maps-directions";

const TourPlanMap = () => {
  // function renderMap() {
  //   return (
  //     <MapView
  //       provider={PROVIDER_GOOGLE}
  //       region={{
  //         latitude: 37.78825,
  //         longitude: -122.4324,
  //         latitudeDelta: 0.09,
  //         longitudeDelta: 0.035,
  //       }}
  //       style={{
  //         flex: 1,
  //         height: "100%",
  //       }}
  //     >
  //       <Marker
  //         coordinate={{ latitude: 37.8025259, longitude: -122.4351431 }}
  //       >
  //         <Callout>
  //           <Text>An Interresting city</Text>
  //         </Callout>
  //       </Marker>
  //     </MapView>
  //   );
  // }

  // return <View style={{ flex: 1 }}>{renderMap()}</View>;
  <MapView region={this.state.region} onRegionChange={this.onRegionChange}>
    {this.state.markers.map((marker, index) => (
      <Marker
        key={index}
        coordinate={marker.latlng}
        title={marker.title}
        description={marker.description}
      />
    ))}
  </MapView>;
};

export default TourPlanMap;
