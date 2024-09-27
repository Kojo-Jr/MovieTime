import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStackNavigator from "../Protected/HomeStack/HomeStackNavigator";
import ProfileScreen from "../../screens/Profile/ProfileScreen";
import NewsScreen from "../../screens/NewsScreen/NewsScreen";
import RecommendationScreen from "../../screens/Recommendations/RecommendationScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import FavouriteScreen from "../../screens/Favourite/FavouriteScreen";
import SettingsScreen from "../../screens/Settings/SettingsScreen";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          drawerIcon: () => <AntDesign name="home" size={24} color="black" />
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          drawerIcon: () => <AntDesign name="user" size={24} color="black" />
        }}
      />
      <Drawer.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerShown: false,
          drawerIcon: () => <AntDesign name="book" size={24} color="black" />
        }}
      />
      <Drawer.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          headerShown: false,
          drawerIcon: () => <AntDesign name="hearto" size={24} color="black" />
        }}
      />
      <Drawer.Screen
        name="Recommendation"
        component={RecommendationScreen}
        options={{
          headerShown: false,
          drawerIcon: () => <AntDesign name="staro" size={24} color="black" />
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          drawerIcon: () => <AntDesign name="setting" size={24} color="black" />
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
