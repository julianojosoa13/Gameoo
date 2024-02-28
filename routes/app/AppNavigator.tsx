import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FinalStep from '../../screens/auth/FinalStep';
import { Session } from '@supabase/supabase-js';

const Stack = createNativeStackNavigator();

const AppNavigator = ({ session }: { session: Session | null }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {session && session.user ? (
        <>
          <Stack.Screen name='FinalStep' component={FinalStep} />
        </>
      ) : (
        <>
          <Stack.Screen name='FinalStep' component={FinalStep} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})