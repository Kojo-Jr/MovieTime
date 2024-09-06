import { View, Text, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { React, useEffect } from "react";
import { NavigationHeader } from "../../../components/Headers";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FlashList } from "@shopify/flash-list";
import { image } from "../../../function/api/fetchPost";

export default function AllMovies({ route }) {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate("HomeScreen");
  };

  const navigateToMovieDetails = (movie) => {
    navigation.navigate("MovieDetailScreen", { params: { movie } });
  };

  const truncateTitle = (title, maxLength) => {
    if (title.length <= maxLength) return title;
    return `${title.substring(0, maxLength)}...`;
  };

  const { movies = [] } = route.params.params || {}; // Added fallback for movies

  // Log the movies to ensure data is correctly passed
  useEffect(() => {
    // console.log("Movies passed to AllMovies:", movies);
  }, [movies]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationHeader
        iconComponent={
          <Ionicons
            name="arrow-back"
            size={24}
            color={"black"}
            onPress={goBack}
          />
        }
        iconComponent2={<AntDesign name="search1" size={24} color={"black"} />}
        iconComponent3={
          <MaterialCommunityIcons name="account" size={32} color="black" />
        }
        headerTitleText={"Movies"}
      />

      <View style={{ flexGrow: 1 }}>
        <FlashList
          data={movies}
          renderItem={({ item }) => (
            <View style={styles.movieListContainer}>
              <View>
                <TouchableOpacity
                  style={styles.movieCard}
                  onPress={navigateToMovieDetails}
                >
                  <Image
                    style={styles.movieImage}
                    source={{ uri: image(item.poster_path) }}
                    resizeMode="cover"
                  />
                  <Text style={styles.movieTitle}>
                    {truncateTitle(item.title, 20)}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          estimatedItemSize={200}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: wp("4")
  },
  movieListContainer: {
    marginTop: wp(2)
  },
  movieCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: wp("4") // Added margin bottom to space out movie cards
  },
  movieImage: {
    width: 100,
    height: 60,
    borderRadius: 12,
    marginRight: 12
  },
  movieTitle: {
    fontSize: wp(5),
    fontWeight: "bold"
  }
});
