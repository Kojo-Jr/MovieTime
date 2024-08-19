import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const TrailerCards = ({ imageUrl, title, overview }) => {
  const navigation = useNavigation();

  const truncateTitle = function (title, maxLength) {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    } else {
      return title;
    }
  };
  return (
    <View style={styles.trailerMoviesCardContainer}>
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("MovieDetailScreen", {
              params: { imageUrl, title, overview }
            })
          }
        >
          <Image style={styles.imageCard} source={{ uri: imageUrl }} />
        </TouchableOpacity>
        <View style={styles.movieTitleContainer}>
          <View>
            <Text style={styles.movieTitle}>{truncateTitle(title, 20)}</Text>
          </View>
        </View>
      </View>
      <View style={{ display: "none" }}>
        <Text>{overview}</Text>
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
