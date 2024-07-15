import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../../screens/auth/Onboarding";
import Login from "../../screens/auth/Login";
import Splash from "../../screens/auth/Splash";
import Register from "../../screens/auth/Register";
import FInalStep from "../../screens/app/FirstStep";
import OTPVerification from "../../screens/auth/OTPVerification";
import AppNavigator from "../app/AppNavigator";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="FinalStep" component={FInalStep} />
      <Stack.Screen name="OTPVerif" component={OTPVerification} />
      <Stack.Screen name="AppNavigator" component={AppNavigator} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
