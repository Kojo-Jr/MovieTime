import { View, Text, StyleSheet } from "react-native";
import React from "react";

const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>NewsScreen</Text>
    </View>
  );
};

export default NewsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
