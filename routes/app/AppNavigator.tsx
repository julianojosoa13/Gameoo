import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstStep from '../../screens/app/FirstStep';
import { Session } from '@supabase/supabase-js';
import BottomTabNavigator from './BottomTabNavigator/BottomTabNavigator';
import { UserContext } from '../../utils/contexts/UserContext';

const Stack = createNativeStackNavigator();

const AppNavigator = ({ session }: { session: Session | null }) => {
  const {setUserSession} = useContext(UserContext)

  if (session && session.user) setUserSession(session)

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {session && session.user ? (
        <>
          <Stack.Screen name='FirstStep' component={FirstStep} />
        </>
      ) : (
        <>
          <Stack.Screen name='FirstStep' component={FirstStep} />
        </>
      )}

      <Stack.Screen name="Tabs" component={BottomTabNavigator} />
    </Stack.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})