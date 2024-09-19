import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const MiniHeader = ({ title, navigationText, handleNavigation }) => {
  return (
    <View style={styles.popularMoviesHeader}>
      <View>
        <Text style={styles.popularMovieHeaderTitle}>{title}</Text>
      </View>
      <Pressable onPress={handleNavigation}>
        <Text style={styles.popularMovieHeaderNavigationText}>
          {navigationText}
        </Text>
      </Pressable>
    </View>
  );
};

export default MiniHeader;

const styles = StyleSheet.create({
  popularMoviesHeader: {
    marginTop: wp("5"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: wp(3)
  },
  popularMovieHeaderTitle: {
    fontSize: wp("5"),
    fontWeight: "bold"
  },
  popularMovieHeaderNavigationText: {
    fontSize: wp("4"),
    color: "#77C8B2"
  }
});
