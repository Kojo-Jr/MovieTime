import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ProtectedStackNavigator from "./Protected/ProtectedStackNavigator";
import AuthStackNavigator from "./Authentication/AuthStackNavigator";

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  const [user, setUser] = useState(false); // TODO: check if user is logged in
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="ProtectedStack"
            component={ProtectedStackNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="AuthStack"
            component={AuthStackNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
