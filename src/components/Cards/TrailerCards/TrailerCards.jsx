import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const TrailerCards = ({ imageUrl, title }) => {
  return (
    <View style={styles.trailerMoviesCardContainer}>
      <View>
        <TouchableOpacity>
          <Image style={styles.imageCard} source={imageUrl} />
        </TouchableOpacity>
        <View style={styles.movieTitleContainer}>
          <View>
            <Text style={styles.movieTitle}>{title}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TrailerCards;

const styles = StyleSheet.create({
  trailerMoviesCardContainer: {
    marginTop: wp("3"),
    flexDirection: "row",
    marginRight: wp("5")
  },
  imageCard: {
    width: wp("70"),
    height: wp("40"),
    borderRadius: wp("4"),
    resizeMode: "cover"
  },
  movieTitleContainer: {
    marginTop: wp("2")
  },
  movieTitle: {
    fontWeight: "bold"
  }
});
