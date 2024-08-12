import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();

  const handleSkip = () => {
    navigation.navigate("ProtectedStack", {
      screen: "DrawerNavigator",
      params: { screen: "Home" } // Use params to specify the target screen within the DrawerNavigator
    });
  };

  return (
    <View style={{ flex: 1, padding: wp("3"), backgroundColor: "white" }}>
      <StatusBar style="auto" />
      <View
        style={{
          marginTop: wp("30"),
          alignItems: "center",
          gap: wp("2")
        }}
      >
        <View>
          <Text
            style={{
              fontSize: wp("6"),
              fontWeight: "600",
              fontFamily: "Roboto"
            }}
          >
            Welcome to Movietime!
          </Text>
        </View>
        <View>
          <Text style={{ fontFamily: "Roboto", color: "gray" }}>
            Your personal guide to the world of Cinema
          </Text>
        </View>
      </View>

      {/* Sign Up Details */}
      <View style={{ marginTop: wp("20"), alignItems: "center", gap: wp("5") }}>
        {/* Email */}
        <View>
          <TextInput
            style={{
              backgroundColor: "#FAFAFA",
              padding: wp("3"),
              width: wp("80"),
              borderRadius: wp("2")
            }}
            placeholder="Email, phone number or username"
            placeholderTextColor={"gray"}
          />
        </View>

        {/* password */}
        <View>
          <TextInput
            style={{
              backgroundColor: "#FAFAFA",
              padding: wp("3"),
              width: wp("80"),
              borderRadius: wp("2")
            }}
            placeholder="Password"
            placeholderTextColor={"gray"}
          />
        </View>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity style={{ marginLeft: wp("8"), marginTop: wp("3") }}>
        <Text style={{ color: "#77C8B2" }}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={{
          marginTop: wp("10"),
          backgroundColor: "#FB5558",
          width: wp("80"),
          alignItems: "center",
          alignSelf: "center",
          borderRadius: wp("5")
        }}
      >
        <Text style={{ color: "#fff", padding: wp("4"), fontSize: wp("4") }}>
          SIGN IN
        </Text>
      </TouchableOpacity>

      {/* Alternative Sign Up Options */}
      <View style={{ marginTop: wp("20"), alignItems: "center", gap: wp("7") }}>
        <View>
          <Text style={{ color: "gray" }}>or continue with</Text>
        </View>
        {/* Facebook Button  & HGoogle Button*/}
        <View style={{ flexDirection: "row", gap: wp("5") }}>
          <TouchableOpacity
            style={{
              width: wp("40"),
              backgroundColor: "#003478",
              borderRadius: wp("6"),
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: wp("3"),
              gap: wp("2")
            }}
          >
            <FontAwesome name="facebook" size={24} color="white" />
            <Text style={{ color: "#fff" }}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: wp("40"),
              backgroundColor: "#FAFAFA",
              borderRadius: wp("6"),

              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: wp("3"),
              gap: wp("2")
            }}
          >
            <Image
              style={{
                width: wp("7"),
                height: wp("7")
              }}
              source={require("../../../../assets/mockImages/google-logo.png")}
            />
            <Text style={{ color: "gray" }}>Google</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Already have an account? */}
      <View
        style={{
          marginTop: wp("15"),
          alignSelf: "center",
          flexDirection: "row",
          gap: wp("0.5")
        }}
      >
        <View>
          <Text>Don't have an account?</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: "#77C8B2" }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      {/* Skip */}
      {/* <TouchableOpacity
        style={{
          marginTop: wp("3"),
          alignSelf: "flex-end",
          padding: wp("2"),
          right: wp("3"),
          backgroundColor: "#003478",
          width: wp("15"),
          alignItems: "center",
          borderRadius: wp("1")
        }}
        onPress={handleSkip}
      >
        <Text style={{ color: "#fff", fontSize: wp("4") }}>Skip</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default SignUp;
