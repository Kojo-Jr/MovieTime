import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";

const ComingSoonCard = ({ imageUrl, movieTitle }) => {
  return (
    <View style={styles.popularMoviesCardContainer}>
      <View>
        <TouchableOpacity>
          <Image style={styles.imageCard} source={{ uri: imageUrl }} />
        </TouchableOpacity>
        <View style={styles.movieTitleContainer}>
          <View>
            <Text style={styles.movieTitle}>{movieTitle}</Text>
          </View>
          {/* <View style={styles.movieRating}>
            <MaterialIcons name="star-rate" size={24} color="#FFC145" />
            <Text>{movieRating}</Text>
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default ComingSoonCard;

const styles = StyleSheet.create({
  popularMoviesCardContainer: {
    marginTop: wp("3"),
    flexDirection: "row",
    marginRight: wp("5")
  },
  imageCard: {
    width: wp("40"),
    height: wp("68"),
    borderRadius: wp("4")
  },
  movieTitleContainer: {
    marginTop: wp("2")
  },
  movieTitle: {
    fontWeight: "bold"
  }
  //   movieRating: {
  //     flexDirection: "row",
  //     alignItems: "center"
  //   }
});