import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Sign_up_navigation from "./src/navigation/Sign-up-navigation";

const App = () => {
  const [loaded] = useFonts({
    "Roboto-Black": require("./src/assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Sign_up_navigation />
    </NavigationContainer>
  );
};

export default App;
