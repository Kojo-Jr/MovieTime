import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackNavigator from "./HomeStack/HomeStackNavigator";
import ProfileScreen from "../../screens/Profile/ProfileScreen";
import NewsScreen from "../../screens/NewsScreen/NewsScreen";
import RecommendationScreen from "../../screens/Recommendations/RecommendationScreen";

const ProtectedStack = createNativeStackNavigator();
const ProtectedStackNavigator = () => {
  return (
    <ProtectedStack.Navigator initialRouteName="HomeStack">
      <ProtectedStack.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <ProtectedStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <ProtectedStack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{ headerShown: false }}
      />
      <ProtectedStack.Screen
        name="RecommendationScreen"
        component={RecommendationScreen}
        options={{ headerShown: false }}
      />
    </ProtectedStack.Navigator>
  );
};

export default ProtectedStackNavigator;
