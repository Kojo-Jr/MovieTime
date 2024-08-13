import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const LocalLoading = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <Text>Creating account...</Text>
    </View>
  );
};

export default LocalLoading;
