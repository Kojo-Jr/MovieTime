import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  MainScreen,
  ProfileScreen,
  NewsScreen,
  FavouriteScreen,
  RecommendationScreen,
  SettingsScreen
} from "../../../screens/Home";

const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ProfleScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="RecommendationScreen"
        component={RecommendationScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
