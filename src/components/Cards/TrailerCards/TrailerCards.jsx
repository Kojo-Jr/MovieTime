import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const TrailerCards = ({ imageUrl, title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.trailerMoviesCardContainer}>
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("MovieDetailScreen", {
              params: { imageUrl, title }
            })
          }
        >
          <Image style={styles.imageCard} source={{ uri: imageUrl }} />
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
