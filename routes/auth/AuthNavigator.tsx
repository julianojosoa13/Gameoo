import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../../screens/auth/Onboarding';
import Login from '../../screens/auth/Login';
import Splash from '../../screens/auth/Splash';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name='Onboarding' component={Onboarding} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})