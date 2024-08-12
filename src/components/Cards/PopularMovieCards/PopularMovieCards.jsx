import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PopularMovieCards = ({
  imageUrl,
  movieTitle,
  vote_average,
  overview
}) => {
  const navigation = useNavigation();

  const truncateTitle = (title, maxLength) => {
    if (title.length <= maxLength) return title;
    return `${title.substring(0, maxLength)}...`;
  };

  const roundAverage = (vote_average) => {
    return vote_average.toFixed(1);
  };

  return (
    <View style={styles.popularMoviesCardContainer}>
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("MovieDetailScreen", {
              params: { imageUrl, movieTitle, vote_average, overview }
            })
          }
        >
          <Image style={styles.imageCard} source={{ uri: imageUrl }} />
        </TouchableOpacity>
        <View style={styles.movieTitleContainer}>
          <View>
            <Text style={styles.movieTitle}>
              {truncateTitle(movieTitle, 20)}
            </Text>
          </View>
          <View style={styles.movieRating}>
            <MaterialIcons name="star-rate" size={24} color="#FFC145" />
            <Text>{roundAverage(vote_average) || vote_average}</Text>
          </View>
        </View>
      </View>
      <View style={{ display: "none" }}>
        <Text>{overview}</Text>
      </View>
    </View>
  );
};

export default PopularMovieCards;

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
  },
  movieRating: {
    flexDirection: "row",
    alignItems: "center"
  }
});
