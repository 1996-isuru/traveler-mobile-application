import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {
  icons,
  images,
  SIZES,
  COLORS,
  FONTS,
  GOOGLE_API_KEY,
} from "../../../../constants/index";

const MapInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_API_KEY,
        language: "en",
      }}
    />
  );
};
export default MapInput;