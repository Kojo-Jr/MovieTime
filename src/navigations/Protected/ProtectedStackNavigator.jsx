import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "../DrawerNavigator/DrawerNavigator";

const ProtectedStack = createNativeStackNavigator();
const ProtectedStackNavigator = () => {
  return (
    <ProtectedStack.Navigator initialRouteName="DrawerNavigator">
      <ProtectedStack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </ProtectedStack.Navigator>
  );
};

export default ProtectedStackNavigator;
