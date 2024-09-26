import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const LoginLoading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <Text>Logging in...</Text>
    </View>
  );
};

export default LoginLoading;
