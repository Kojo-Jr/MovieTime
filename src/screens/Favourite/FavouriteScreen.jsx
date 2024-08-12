import { View, Text, StyleSheet } from "react-native";
import React from "react";

const FavouriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FavouriteScreen</Text>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
