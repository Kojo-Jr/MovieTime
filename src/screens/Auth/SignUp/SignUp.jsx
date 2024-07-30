import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SignUp = () => {
  return (
    <View style={{ flex: 1, padding: wp("3") }}>
      <StatusBar style="auto" />
      <View
        style={{
          marginTop: wp("20"),
          alignItems: "center"
        }}
      >
        <View>
          <Text
            style={{
              fontSize: wp("7"),
              fontWeight: "semibold",
              fontFamily: "Roboto"
            }}
          >
            Welcome to Movietime!
          </Text>
        </View>
        <View>
          <Text style={{ fontFamily: "Roboto" }}>
            Your personal guide to the world of Cinema
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
