import { View, Text, StyleSheet } from "react-native";
import React from "react";

const RecommendationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>RecommendationScreen</Text>
    </View>
  );
};

export default RecommendationScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
