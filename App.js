import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FlashList } from "@shopify/flash-list";
import { popularMovieData, trailerData } from "./mockData/movies";
import Carousel from "./src/components/Cards/CarouselCards/Carousel";
import PopularMovieCards from "./src/components/Cards/PopularMovieCards/PopularMovieCards";
import MiniHeader from "./src/components/Headers/MiniHeader/MiniHeader";
import NavigationHeader from "./src/components/Headers/NavigationHeader/NavigationHeader";
import TrailerCards from "./src/components/Cards/TrailerCards/TrailerCards";

export default function App() {
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
                  // borderColor: "red",
                  // borderWidth: 1,
                  height: wp("85")
                }}
              >
                <FlashList
                  data={popularMovieData}
                  renderItem={({ item }) => (
                    <PopularMovieCards
                      imageUrl={item.imageUrl}
                      movieTitle={item.title}
                      movieRating={item.rating}
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
                data={trailerData}
                renderItem={({ item }) => (
                  <TrailerCards imageUrl={item.imageUrl} title={item.title} />
                )}
                estimatedItemSize={100}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />

              {/* New Movies Section */}
              <MiniHeader title={"New"} navigationText={"View All"} />
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: wp("4")

    // alignItems: "center",
    // justifyContent: "center"
  }
});
