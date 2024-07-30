import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SplashScreen = () => {
  return (
    <View style={styles.splashscreenContainer}>
      <StatusBar style="auto" />
      <Text style={styles.splashScreenText}>movietime</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashscreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  splashScreenText: {
    fontSize: wp("10"),
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#FB5558"
  }
});
