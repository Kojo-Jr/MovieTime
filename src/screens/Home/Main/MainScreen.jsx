import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FlashList } from "@shopify/flash-list";
import {
  Carousel,
  PopularMovieCards,
  TrailerCards,
  TopRatedCards
} from "../../../../src/components/Cards";
import {
  NavigationHeader,
  MiniHeader
} from "../../../../src/components/Headers";
import {
  fetchRequestPopular,
  fetchRequestTopRated,
  fetchRequestUpcoming,
  fetchRequestNowPlaying,
  fetchRequestHorror,
  fetchRequestComedy,
  fetchRequestAction,
  fetchRequestDrama,
  fetchRequestSciFi,
  fetchRequestTrailer,
  image
} from "../../../function/api/fetchPost";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainScreen = () => {
  const [popular, setPopular] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [horror, setHorror] = useState([]);
  const [comedy, setComedy] = useState([]);
  const [action, setAction] = useState([]);
  const [drama, setDrama] = useState([]);
  const [sciFi, setSciFi] = useState([]);

  useEffect(() => {
    getMoviesData();
  }, []);

  const getMoviesData = async () => {
    try {
      const popularData = await fetchRequestPopular();
      const trailerData = await fetchRequestTrailer();
      const topRatedData = await fetchRequestTopRated();
      const upcomingData = await fetchRequestUpcoming();
      const nowPlayingData = await fetchRequestNowPlaying();
      const horrorData = await fetchRequestHorror();
      const comedyData = await fetchRequestComedy();
      const actionData = await fetchRequestAction();
      const dramaData = await fetchRequestDrama();
      const sciFiData = await fetchRequestSciFi();

      if (popularData && popularData.results) setPopular(popularData.results);
      if (trailerData && trailerData.results) setTrailer(trailerData.results);
      if (topRatedData && topRatedData.results)
        setTopRated(topRatedData.results);
      if (upcomingData && upcomingData.results)
        setUpcoming(upcomingData.results);
      if (nowPlayingData && nowPlayingData.results)
        setNowPlaying(nowPlayingData.results);
      if (horrorData && horrorData.results) setHorror(horrorData.results);
      if (comedyData && comedyData.results) setComedy(comedyData.results);
      if (actionData && actionData.results) setAction(actionData.results);
      if (dramaData && dramaData.results) setDrama(dramaData.results);
      if (sciFiData && sciFiData.results) setSciFi(sciFiData.results);
    } catch (error) {
      console.error("Error fetching movie data: ", error);
    }
  };

  // console.log(popular);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Header */}
      <NavigationHeader
        iconComponent={<Ionicons name="menu" size={24} color={"black"} />}
        iconComponent2={<AntDesign name="search1" size={24} color={"black"} />}
        iconComponent3={
          <MaterialCommunityIcons name="account" size={32} color="black" />
        }
        headerTitleText={"movietime"}
      />
      <FlashList
        ListHeaderComponent={() => {
          return (
            <View>
              {/* Carousel Card */}
              <Carousel />

              {/* Popular Movies Section */}
              {/* Mini Header */}
              <MiniHeader title="Popular Movies" navigationText="View All" />

              {/* Popular Movies Cards */}
              <View
                style={{
                  // flexGrow: 1,
                  flexDirection: "row",
                  height: wp("85")
                }}
              >
                <FlashList
                  data={popular}
                  renderItem={({ item }) => (
                    <PopularMovieCards
                      imageUrl={image(item.poster_path)}
                      movieTitle={item.title}
                      vote_average={item.vote_average}
                      data={popular}
                    />
                  )}
                  estimatedItemSize={100}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>

              {/* Trailer Section */}

              <MiniHeader title={"Trailers"} navigationText={"View All"} />

              {/* Trailer Cards */}
              <FlashList
                data={trailer}
                renderItem={({ item }) => (
                  <TrailerCards
                    imageUrl={image(item.poster_path)}
                    title={item.title}
                  />
                )}
                estimatedItemSize={100}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />

              {/* New Movies Section */}
              <MiniHeader title={"Top Rated"} navigationText={"View All"} />
              <FlashList
                data={topRated}
                renderItem={({ item }) => (
                  <TopRatedCards
                    imageUrl={image(item.poster_path)}
                    movieTitle={item.title}
                    data={popular}
                  />
                )}
                estimatedItemSize={100}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />

              {/* Coming Soon Section */}
              <MiniHeader title={"Coming Soon"} navigationText={"View All"} />
              <FlashList
                data={upcoming}
                renderItem={({ item }) => (
                  <TopRatedCards
                    imageUrl={image(item.poster_path)}
                    movieTitle={item.title}
                    data={popular}
                  />
                )}
                estimatedItemSize={100}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View> //
          );
        }}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: wp("4")
  }
});
