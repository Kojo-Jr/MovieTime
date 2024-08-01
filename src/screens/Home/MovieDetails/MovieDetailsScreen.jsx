import { View, Text, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { NavigationHeader } from "../../../components/Headers";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const MovieDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const navigatetoHomeScreen = () => {
    navigation.navigate("HomeScreen");
  };

  const { imageUrl, movieTitle, vote_average } = route.params.params;
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />

      {/* Image Banner */}
      <View>
        <Image
          style={{
            height: wp("50"),
            width: wp("100"),
            resizeMode: "cover"
          }}
          source={{ uri: imageUrl }}
        />

        {/* import navigation header */}
        <View
          style={{ position: "absolute", width: wp("100"), padding: wp("3") }}
        >
          <NavigationHeader
            iconComponent={
              <FontAwesome name="angle-left" size={24} color="white" />
            }
            iconComponent2={
              <Ionicons name="heart-outline" size={24} color="white" />
            }
            iconComponent3={
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color="white"
              />
            }
            handleNavigation={navigatetoHomeScreen}
          />
        </View>
      </View>
    </View>
  );
};

export default MovieDetailsScreen;
