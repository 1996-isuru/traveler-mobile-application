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
  Alert
} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from "../../constants/index";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// import MapViewDirections from "react-native-maps-directions";

const Map = () => {

    function renderMap() {
        return(
            <View style={{flex: 1}}>
                <MapView
                style={{
                    flex: 1
                }}>

                </MapView>
            </View>
        )
    }

    return(
        <View style={{flex: 1}}>
            {renderMap()}
        </View>
    )

}

export default Map;