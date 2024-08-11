import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStackNavigator from "../Protected/HomeStack/HomeStackNavigator";
import ProfileScreen from "../../screens/Profile/ProfileScreen";
import NewsScreen from "../../screens/NewsScreen/NewsScreen";
import RecommendationScreen from "../../screens/Recommendations/RecommendationScreen";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="News"
        component={NewsScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Recommendation"
        component={RecommendationScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
