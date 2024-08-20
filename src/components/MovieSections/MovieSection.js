import React from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  PopularMovieCards,
  TrailerCards,
  TopRatedCards,
  ComingSoonCard,
  NowPlayingCard,
  HorrorCard,
  ComedyCard
} from "../Cards";
import { MiniHeader } from "../Headers";
import { image } from "../../function/api/fetchPost";
import { useNavigation } from "@react-navigation/native";

const MovieSection = ({ title, data, cardType, navigationText }) => {
  const navigation = useNavigation();

  const showAllMovies = () => {
    navigation.navigate("AllMoviesScreen");
  };
  const renderCard = (item) => {
    switch (cardType) {
      case "Popular":
        return (
          <PopularMovieCards
            imageUrl={image(item.poster_path)}
            movieTitle={item.title}
            vote_average={item.vote_average}
            overview={item.overview}
          />
        );
      case "Trailer":
        return (
          <TrailerCards
            imageUrl={image(item.poster_path)}
            title={item.title}
            overview={item.overview}
            vote_average={item.vote_average}
          />
        );
      case "TopRated":
        return (
          <TopRatedCards
            imageUrl={image(item.poster_path)}
            movieTitle={item.title}
            overview={item.overview}
            vote_average={item.vote_average}
          />
        );
      case "ComingSoon":
        return (
          <ComingSoonCard
            imageUrl={image(item.poster_path)}
            movieTitle={item.title}
            overview={item.overview}
            vote_average={item.vote_average}
          />
        );
      case "NowPlaying":
        return (
          <NowPlayingCard
            imageUrl={image(item.poster_path)}
            movieTitle={item.title}
            overview={item.overview}
            vote_average={item.vote_average}
          />
        );
      case "Horror":
        return (
          <HorrorCard
            imageUrl={image(item.poster_path)}
            movieTitle={item.title}
            overview={item.overview}
            vote_average={item.vote_average}
          />
        );
      case "Comedy":
        return (
          <ComedyCard
            imageUrl={image(item.poster_path)}
            movieTitle={item.title}
            overview={item.overview}
            vote_average={item.vote_average}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View>
      <MiniHeader
        title={title}
        navigationText={navigationText}
        handleNavigation={showAllMovies}
      />
      <FlashList
        data={data}
        renderItem={({ item }) => renderCard(item)}
        estimatedItemSize={100}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: wp("2%") }}
      />
    </View>
  );
};

export default MovieSection;
