import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../../screens/Auth/SplashScreen/SplashScreen";
import SignUp from "../../screens/Auth/SignUp/SignUp";
import SignIn from "../../screens/Auth/SignIn/SignIn";

const AuthStack = createNativeStackNavigator();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="SplashScreen">
      <AuthStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUpScreen"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignInScreen"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
