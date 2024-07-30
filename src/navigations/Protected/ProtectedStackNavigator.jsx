import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackNavigator from "./HomeStack/HomeStackNavigator";

const ProtectedStack = createNativeStackNavigator();
const ProtectedStackNavigator = () => {
  return (
    <ProtectedStack.Navigator>
      <ProtectedStack.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
    </ProtectedStack.Navigator>
  );
};

export default ProtectedStackNavigator;
