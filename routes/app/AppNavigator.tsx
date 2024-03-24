import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstStep from '../../screens/app/FirstStep';
import { Session } from '@supabase/supabase-js';
import BottomTabNavigator from './BottomTabNavigator/BottomTabNavigator';
import LoggingOut from '../../screens/app/LoggingOut';
import AuthNavigator from '../auth/AuthNavigator';
import SearchScreen from '../../screens/app/SearchScreen';
import Game from '../../screens/app/Game';
import Shop from '../../screens/app/Shop';

const Stack = createNativeStackNavigator();

const AppNavigator = ({ session }: { session: Session | null }) => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='FirstStep' component={FirstStep} />
      <Stack.Screen name="Tabs" component={BottomTabNavigator} />
      <Stack.Screen name="LogOut" component={LoggingOut} />
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Shop" component={Shop} />
    </Stack.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})