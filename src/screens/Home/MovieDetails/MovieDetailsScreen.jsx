import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { MiniHeader, NavigationHeader } from "../../../components/Headers";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import {
  fetchRequestRecommended,
  image
} from "../../../function/api/fetchPost";
import { RecommendedCard } from "../../../components/Cards";
import { castImages, photos } from "../../../../mockData/movies";

const MovieDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const navigatetoHomeScreen = () => {
    navigation.navigate("HomeScreen");
  };

  const [recommended, setRecommended] = useState([]);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    getMoviesData();
    loadFavouriteStatus(); //load favourite status when the components mounts
  }, []);

  const loadFavouriteStatus = async () => {
    try {
      const favouriteMovie = await AsyncStorage.getItem(
        `favorite_${movieTitle}`
      );
      if (favouriteMovie !== null) {
        setIsFavourite(true);
      }
    } catch (error) {
      console.log("Error loading favourite status: ", error);
    }
  };

  const getMoviesData = async () => {
    try {
      const recommendedData = await fetchRequestRecommended();
      // setRecommended(recommendedData.results);
      if (recommendedData && recommendedData.results) {
        setRecommended(recommendedData.results);
      }
    } catch (error) {
      console.log("Error fetching recommended movie data: ", error);
    }
  };

  const toggleFavourite = async () => {
    try {
      const newStatus = !isFavourite;
      setIsFavourite(newStatus);
      if (newStatus) {
        // Save the movie details
        await AsyncStorage.setItem(
          `favorite_${movieTitle}`,
          JSON.stringify({
            imageUrl,
            movieTitle,
            vote_average,
            overview
          })
        );
      } else {
        // Remove the movie from favorites
        await AsyncStorage.removeItem(`favorite_${movieTitle}`);
      }
    } catch (error) {
      console.log("Error saving favourite status: ", error);
    }
  };

  const truncateTitle = (title, maxLength) => {
    if (!title || typeof title !== "string") return ""; // Handle undefined or non-string values
    if (title.length <= maxLength) return title;
    return `${title.substring(0, maxLength)}...`;
  };

  const { imageUrl, movieTitle, vote_average, overview } = route.params.params;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="auto" />

      {/* Image Banner */}
      <View style={{ flexGrow: 1 }}>
        <FlashList
          ListHeaderComponent={() => {
            return (
              <View>
                <Image style={styles.imageBanner} source={{ uri: imageUrl }} />

                {/* import navigation header */}
                <View style={styles.navigationHeader}>
                  <NavigationHeader
                    iconComponent={
                      <FontAwesome name="angle-left" size={32} color="white" />
                    }
                    iconComponent2={
                      <Ionicons
                        name={isFavourite ? "heart" : "heart-outline"}
                        size={32}
                        color={isFavourite ? "red" : "white"}
                        onPress={toggleFavourite}
                      />
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

                {/* Movie Card, title, rating, duration, genre */}
                <View style={styles.movieDetailContainer}>
                  <TouchableOpacity>
                    <Image
                      style={styles.movieCard}
                      source={{ uri: imageUrl }}
                    />
                  </TouchableOpacity>

                  {/* Movie title, rating */}
                  <View style={styles.movieTitleContainer}>
                    <View>
                      <Text style={styles.movieTitle}>
                        {truncateTitle(movieTitle, 20)}
                      </Text>
                    </View>
                    <View style={styles.movieRatingContainer}>
                      <View style={styles.ratingiconContainer}>
                        <MaterialIcons
                          name="star-rate"
                          size={24}
                          color="#FFC145"
                        />
                        <Text>{vote_average}</Text>
                      </View>
                      <View style={styles.durationContainer}>
                        <MaterialIcons
                          name="access-time"
                          size={24}
                          color="#77C8b2"
                        />
                        <Text style={{ color: "gray", fontSize: wp("3.5") }}>
                          2h 30m
                        </Text>
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
                    <Text style={styles.movieDescriptionText}>
                      Release date:
                    </Text>
                    <Text style={styles.movieDescriptionText1}>
                      April 27, 2018
                    </Text>
                  </View>
                  <View style={styles.movieDescription}>
                    <Text style={styles.movieDescriptionText}>Director:</Text>
                    <Text style={styles.movieDescriptionText2}>
                      Anthony Russo, Joe Russo
                    </Text>
                  </View>
                  <View style={styles.movieDescription}>
                    <Text style={styles.movieDescriptionText}>Producer:</Text>
                    <Text style={styles.movieDescriptionText3}>
                      Kevin Feige
                    </Text>
                  </View>
                  <View style={styles.movieDescription}>
                    <Text style={styles.movieDescriptionText}>Composer:</Text>
                    <Text style={styles.movieDescriptionText4}>
                      Alan Silvestre
                    </Text>
                  </View>
                  <View style={styles.movieDescription}>
                    <Text style={styles.movieDescriptionText}>Box Office:</Text>
                    <Text style={styles.movieDescriptionText5}>
                      $2.049 billion
                    </Text>
                  </View>
                </View>

                {/* Storyline */}
                <View style={styles.storylineContainer}>
                  <View>
                    <Text style={styles.storylineTitleText}>Storyline</Text>
                    <View>
                      <Text style={styles.storylineText}>{overview}</Text>
                    </View>
                  </View>
                </View>

                {/* Cast */}
                <View style={styles.castContainer}>
                  <View>
                    <Text style={styles.castTitleText}>Cast</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      flexGrow: 1,
                      height: wp("30")
                    }}
                  >
                    <FlashList
                      data={castImages}
                      renderItem={({ item }) => {
                        return (
                          <View style={styles.castImagesContainer}>
                            <View style={styles.imageContent}>
                              <Image
                                style={styles.castImage}
                                source={item.imageUrl}
                              />
                              <Text>{item.actorsName}</Text>
                            </View>
                          </View>
                        );
                      }}
                      estimatedItemSize={100}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    />
                  </View>
                </View>

                {/* Photo Gallery */}
                <View style={styles.photoGalleryContainer}>
                  <View>
                    <Text style={styles.photoGalleryTitleText}>Photo</Text>
                  </View>
                  <View style={{ flexDirection: "row", flexGrow: 1 }}>
                    <FlashList
                      data={photos}
                      renderItem={({ item }) => {
                        return (
                          <View style={styles.photoGalleryImagesContainer}>
                            <Image
                              style={styles.photo}
                              source={item.imageUrl}
                            />
                          </View>
                        );
                      }}
                      estimatedItemSize={100}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    />
                  </View>
                </View>

                {/* New Movies Section */}
                <View style={styles.recommendedContainer}>
                  <MiniHeader
                    title={"Recommended"}
                    navigationText={"Show All"}
                  />
                  <FlashList
                    data={recommended}
                    renderItem={({ item }) => (
                      <RecommendedCard
                        imageUrl={image(item.poster_path)}
                        movieTitle={item.title}
                        overview={item.overview}
                      />
                    )}
                    estimatedItemSize={100}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>

                {/* Review Header */}
                <View style={styles.recommendedContainer}>
                  <View>
                    <MiniHeader title={"Reviews"} navigationText={"Show All"} />
                  </View>
                  <View style={styles.reviewsContainer}>
                    <View>
                      <Text style={styles.reviewsText}>324 reviews</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: wp(1),
                        bottom: wp(5)
                      }}
                    >
                      <MaterialIcons
                        name="star-rate"
                        size={20}
                        color="#FFC145"
                      />
                      <Text style={styles.reviewsText1}>{vote_average}</Text>
                      <Text styles={styles.reviewsText2}>/10</Text>
                    </View>
                  </View>
                </View>

                {/* Review Details */}
                <View style={styles.reviewsDetailsContainer}>
                  <View>
                    <Image
                      style={{
                        width: wp(17),
                        height: wp(17),
                        borderRadius: wp(20),
                        backgroundColor: "black",
                        marginTop: wp(3)
                      }}
                      source={{
                        uri: "https://cdn.britannica.com/59/182359-050-C6F38CA3/Scarlett-Johansson-Natasha-Romanoff-Avengers-Age-of.jpg"
                      }}
                    />
                  </View>
                  <View style={{ padding: wp(2) }}>
                    <Text style={{ fontWeight: "bold", fontSize: wp(4) }}>
                      Karen Page
                    </Text>
                    <Text style={{ color: "gray" }}>12.05.18</Text>
                    <Text
                      style={{ width: wp(65), color: "gray", marginTop: wp(2) }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptate facere tempora quae aut distinctio debitis
                      eaque, doloremque!
                    </Text>
                  </View>
                  <View>
                    <MaterialIcons name="star-rate" size={20} color="#FFC145" />
                    <Text>9.5</Text>
                  </View>
                </View>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={200}
        />
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
  },
  storylineContainer: {
    padding: wp(3)
  },
  storylineTitleText: {
    fontSize: wp(5),
    fontWeight: "medium"
  },
  storylineText: {
    marginTop: wp(2)
  },
  castContainer: {
    padding: wp(3),
    gap: wp(3)
  },
  castTitleText: {
    fontSize: wp(5),
    fontWeight: "medium"
  },
  castImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(20),
    backgroundColor: "black",
    resizeMode: "cover"
  },
  castImagesContainer: {
    flexDirection: "row",
    marginRight: wp(3)
  },
  imageContent: {
    justifyContent: "center",
    alignItems: "center",
    gap: wp(2)
  },
  photoGalleryContainer: {
    padding: wp(3),
    gap: wp(3)
  },
  photoGalleryTitleText: {
    fontSize: wp(5),
    fontWeight: "medium"
  },
  photoGalleryImagesContainer: {
    flexDirection: "row",
    marginRight: wp(3)
  },
  photo: {
    width: wp(45),
    height: wp(25),
    borderRadius: wp(3),
    backgroundColor: "black"
  },
  recommendedContainer: {
    padding: wp(3),
    gap: wp(2)
  },
  reviewsText: {
    color: "gray"
  },
  reviewsContainer: {
    flexDirection: "row",
    gap: wp(6)
  },
  reviewsText1: {
    fontSize: wp(6),
    color: "#77C8B2"
  },
  reviewsText2: {
    color: "#77C8B2"
  },
  reviewsDetailsContainer: {
    padding: wp(3),
    flexDirection: "row",
    bottom: wp(5)
  }
});
