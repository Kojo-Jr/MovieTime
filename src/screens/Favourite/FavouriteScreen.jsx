import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationHeader } from "../../components/Headers";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons
} from "@expo/vector-icons";

const FavouriteScreen = () => {
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    loadFavourites();
  }, []);

  const loadFavourites = async () => {
    try {
      setIsLoading(true);
      const keys = await AsyncStorage.getAllKeys();
      const favoriteKeys = keys.filter((key) => key.startsWith("favorite_"));

      const favouriteMovies = await AsyncStorage.multiGet(favoriteKeys);
      const favouritesList = favouriteMovies
        .map(([key, value]) => {
          try {
            return JSON.parse(value);
          } catch (error) {
            console.log("Error parsing value:", error);
            return null;
          }
        })
        .filter((item) => item !== null);

      setFavourites(favouritesList);
    } catch (error) {
      console.log("Error loading favourite movies: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const navigateToMovieDetails = (movie) => {
    navigation.navigate("MovieDetailScreen", { params: movie });
  };

  const renderFavouriteItem = ({ item }) => (
    <TouchableOpacity
      style={styles.favouriteCard}
      onPress={() => navigateToMovieDetails(item)}
    >
      <Image style={styles.favouriteImage} source={{ uri: item.imageUrl }} />
      <Text style={styles.favouriteTitle}>{item.movieTitle}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationHeader
        iconComponent={
          <Ionicons
            name="menu"
            size={24}
            color={"black"}
            onPress={openDrawer}
          />
        }
        iconComponent2={<AntDesign name="search1" size={24} color={"black"} />}
        iconComponent3={
          <MaterialCommunityIcons name="account" size={32} color="black" />
        }
        headerTitleText={"Favourites"}
      />

      <View style={styles.favouritesListContainer}>
        {isLoading ? (
          <Text>Loading favourites...</Text>
        ) : favourites.length === 0 ? (
          <Text>No favourites found.</Text>
        ) : (
          <FlatList
            data={favourites}
            renderItem={renderFavouriteItem}
            keyExtractor={(item) => item.movieTitle}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16
  },
  favouritesListContainer: {
    flex: 1
  },
  favouriteCard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12
  },
  favouriteImage: {
    width: 100,
    height: 60,
    borderRadius: 12,
    marginRight: 12
  },
  favouriteTitle: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default FavouriteScreen;
