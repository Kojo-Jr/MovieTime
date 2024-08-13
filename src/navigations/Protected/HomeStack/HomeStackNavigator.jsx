import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../../../screens/Home/Main/MainScreen";
import MovieDetailsScreen from "../../../screens/Home/MovieDetails/MovieDetailsScreen";

const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen
        name="HomeScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="MovieDetailScreen"
        component={MovieDetailsScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
