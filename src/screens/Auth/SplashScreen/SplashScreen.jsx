import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="auto" />
      <Text
        style={{
          fontSize: wp("10"),
          fontFamily: "Roboto",
          fontWeight: "bold",
          color: "#FB5558"
        }}
      >
        movietime
      </Text>
    </View>
  );
};

export default SplashScreen;
