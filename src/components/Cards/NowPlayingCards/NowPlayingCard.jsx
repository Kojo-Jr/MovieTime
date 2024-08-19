import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const NowPlayingCard = ({ imageUrl, movieTitle, vote_overage, overview }) => {
  const navigation = useNavigation();

  const truncateTitle = (title, maxLength) => {
    if (title.length <= maxLength) return title;
    return `${title.substring(0, maxLength)}...`;
  };

  return (
    <View style={styles.popularMoviesCardContainer}>
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("MovieDetailScreen", {
              params: { imageUrl, movieTitle, vote_overage, overview }
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
          {/* <View style={styles.movieRating}>
            <MaterialIcons name="star-rate" size={24} color="#FFC145" />
            <Text>{movieRating}</Text>
          </View> */}
        </View>
      </View>
      <View style={{ display: "none" }}>
        <Text>{overview}</Text>
        <Text>{vote_overage}</Text>
      </View>
    </View>
  );
};

export default NowPlayingCard;

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
