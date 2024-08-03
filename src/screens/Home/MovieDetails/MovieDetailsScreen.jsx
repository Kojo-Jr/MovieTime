import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { NavigationHeader } from "../../../components/Headers";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const MovieDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const navigatetoHomeScreen = () => {
    navigation.navigate("HomeScreen");
  };

  const { imageUrl, movieTitle, vote_average } = route.params.params;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="auto" />

      {/* Image Banner */}
      <View>
        <Image style={styles.imageBanner} source={{ uri: imageUrl }} />

        {/* import navigation header */}
        <View style={styles.navigationHeader}>
          <NavigationHeader
            iconComponent={
              <FontAwesome name="angle-left" size={32} color="white" />
            }
            iconComponent2={
              <Ionicons name="heart-outline" size={32} color="white" />
            }
            iconComponent3={
              <MaterialCommunityIcons
                name="dots-vertical"
                size={32}
                color="white"
              />
            }
            handleNavigation={navigatetoHomeScreen}
          />
        </View>
      </View>

      {/* Movie Card, title, rating, duration, genre */}
      <View style={styles.movieDetailContainer}>
        <View>
          <Image style={styles.movieCard} source={{ uri: imageUrl }} />
        </View>

        {/* Movie title, rating */}
        <View style={styles.movieTitleContainer}>
          <View>
            <Text style={styles.movieTitle}>{movieTitle}</Text>
          </View>
          <View style={styles.movieRatingContainer}>
            <View style={styles.ratingiconContainer}>
              <MaterialIcons name="star-rate" size={24} color="#FFC145" />
              <Text>{vote_average}</Text>
            </View>
            <View style={styles.durationContainer}>
              <MaterialIcons name="access-time" size={24} color="#77C8b2" />
              <Text style={{ color: "gray", fontSize: wp("3.5") }}>2h 30m</Text>
            </View>
          </View>
          {/*  Movie genre buttons */}
          <View style={styles.movieGenreContainer}>
            <TouchableOpacity style={styles.genreButton}>
              <Text style={styles.genreText}>Fiction</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.genreButton}>
              <Text style={styles.genreText}>Action</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.genreButton}>
              <Text style={styles.genreText}>Adventure</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Movie description */}
      <View style={styles.movieDescriptionContainer}>
        <View style={styles.movieDescription}>
          <Text style={styles.movieDescriptionText}>Release date:</Text>
          <Text style={styles.movieDescriptionText1}>April 27, 2018</Text>
        </View>
        <View style={styles.movieDescription}>
          <Text style={styles.movieDescriptionText}>Director:</Text>
          <Text style={styles.movieDescriptionText2}>
            Anthony Russo, Joe Russo
          </Text>
        </View>
        <View style={styles.movieDescription}>
          <Text style={styles.movieDescriptionText}>Producer:</Text>
          <Text style={styles.movieDescriptionText3}>Kevin Feige</Text>
        </View>
        <View style={styles.movieDescription}>
          <Text style={styles.movieDescriptionText}>Composer:</Text>
          <Text style={styles.movieDescriptionText4}>Alan Silvestre</Text>
        </View>
        <View style={styles.movieDescription}>
          <Text style={styles.movieDescriptionText}>Box Office:</Text>
          <Text style={styles.movieDescriptionText5}>$2.049 billion</Text>
        </View>
      </View>

      <View style={{ padding: wp(3) }}>
        <View>
          <Text style={{ fontSize: wp(5), fontWeight: "medium" }}>
            Storyline
          </Text>
          <View>
            <Text style={{ marginTop: wp(2) }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              beatae sint quia laudantium facere sequi placeat, fugiat officia
              delectus inventore animi magni, quaerat dolorem in consequuntur
              non eligendi autem debitis?
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  imageBanner: {
    bottom: wp("10"),
    // borderColor: "black",
    // borderWidth: wp("0.5"),
    alignSelf: "center",
    height: wp("70"),
    width: wp("120"),
    borderRadius: wp("55"),
    resizeMode: "cover"
  },
  navigationHeader: {
    position: "absolute",
    width: wp("100"),
    padding: wp("3")
  },
  movieCard: {
    width: wp("35"),
    height: wp("50"),
    borderRadius: wp("5")
  },
  movieDetailContainer: {
    padding: wp("3"),
    position: "absolute",
    marginTop: wp("35"),
    flexDirection: "row"
  },
  movieTitleContainer: {
    marginTop: wp("25"),
    padding: wp("2")
  },
  movieTitle: {
    fontSize: wp("4.5"),
    fontWeight: "bold"
  },
  movieRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: wp("2"),
    gap: wp("5")
  },
  ratingiconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("2")
  },
  durationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("2")
  },
  movieGenreContainer: {
    marginTop: wp("2"),
    flexDirection: "row",
    gap: wp("3")
  },
  genreButton: {
    width: wp("16"),
    backgroundColor: "#ddd",
    alignItems: "center",
    borderRadius: wp(" 1")
  },
  genreText: {
    color: "gray",
    padding: wp("1"),
    fontSize: wp("3")
  },
  movieDescriptionContainer: {
    marginTop: wp("25"),
    padding: wp("3")
  },
  movieDescription: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp("2")
  },
  movieDescriptionText: {
    fontWeight: "heavy",
    fontSize: wp("4")
  },
  movieDescriptionText1: {
    color: "gray",
    fontSize: wp("4")
  },
  movieDescriptionText2: {
    color: "#77C8b2",
    fontSize: wp("4")
  },
  movieDescriptionText3: {
    color: "#77C8b2",
    fontSize: wp("4")
  },
  movieDescriptionText4: {
    color: "#77C8b2",
    fontSize: wp("4")
  },
  movieDescriptionText5: {
    color: "gray",
    fontSize: wp("4")
  }
});
