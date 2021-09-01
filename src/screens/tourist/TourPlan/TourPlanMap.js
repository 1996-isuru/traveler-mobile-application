import { icons, images, SIZES, COLORS, FONTS } from "../../../constants/index";
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
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import React from 'react';

const TourPlanMap = (props) => {
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

export default TourPlanMap;
