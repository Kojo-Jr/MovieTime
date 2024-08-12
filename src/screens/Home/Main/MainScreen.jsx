import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FlashList } from "@shopify/flash-list";
import { Carousel } from "../../../../src/components/Cards"; // Adjust the import path if necessary
import { NavigationHeader } from "../../../../src/components/Headers"; // Adjust the import path if necessary
import LoadingIndicator from "../../../components/LoadingIndicator/LoadingIndicator";
import useMoviesData from "../../../hooks/useMoviesData/useMoviesData";
import MovieSection from "../../../components/MovieSections/MovieSection";
import { useNavigation } from "@react-navigation/native";

const MainScreen = () => {
  const navigation = useNavigation();
  const {
    isLoading,
    popular,
    trailer,
    topRated,
    upcoming,
    nowPlaying,
    horror,
    comedy,
    action,
    drama,
    sciFi
  } = useMoviesData(); // Use the custom hook

  const openDrawer = () => {
    navigation.openDrawer(); // This opens the drawer
  };

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
        headerTitleText={"movietime"}
      />
      <View style={{ flexGrow: 1 }}>
        <FlashList
          ListHeaderComponent={() => {
            return (
              <View>
                <Carousel />
                <MovieSection
                  title="Popular Movies"
                  data={popular}
                  cardType="Popular"
                  navigationText="Show All"
                />
                <MovieSection
                  title="Trailers"
                  data={trailer}
                  cardType="Trailer"
                  navigationText="Show All"
                />
                <MovieSection
                  title="Top Rated"
                  data={topRated}
                  cardType="TopRated"
                  navigationText="Show All"
                />
                <MovieSection
                  title="Coming Soon"
                  data={upcoming}
                  cardType="ComingSoon"
                  navigationText="Show All"
                />
                <MovieSection
                  title="Now Playing"
                  data={nowPlaying}
                  cardType="NowPlaying"
                  navigationText="Show All"
                />
                <MovieSection
                  title={"Horror"}
                  data={horror}
                  cardType="Horror"
                  navigationText="Show All"
                />
                <MovieSection
                  title={"Comedy"}
                  data={comedy}
                  cardType="Comedy"
                  navigationText="Show All"
                />
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={200}
        />
      </View>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <LoadingIndicator />
        </View>
      )}
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: wp("4")
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
