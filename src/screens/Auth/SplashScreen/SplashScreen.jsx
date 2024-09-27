import { View, Text, StyleSheet } from "react-native";
import { React, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // A timeout to navigate to the SignUp screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate("SignInScreen");
    }, 3000); // 3000ms = 3 seconds

    //  To Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

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
