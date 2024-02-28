import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Login from './screens/auth/Login';
import Onboarding from './screens/auth/Onboarding';
import * as SplashScreen from "expo-splash-screen"
import { useFonts } from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './routes/auth/AuthNavigator';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { Session } from '@supabase/supabase-js';
import { supabase } from './supabase/supabase';
import FinalStep from './screens/auth/FinalStep';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Modak": require("./assets/Fonts/Modak-PLKE.ttf"),
    "SF-Thin": require("./assets/Fonts/SF-Pro-Display-Thin.otf"),
    "SF-Regular": require("./assets/Fonts/SF-Pro-Display-Regular.otf"), 
    "SF-Semibold": require("./assets/Fonts/SF-Pro-Display-Semibold.otf") 
  })

  const onLayoutRootView = useCallback(async() => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  
  const [session, setSession] = useState<Session | null>(null)
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })
    
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  
  if (!fontsLoaded) return null

  return (
    <NavigationContainer>
      <AlertNotificationRoot>
        <StatusBar />
        {
          session && session.user ? <FinalStep /> : <AuthNavigator />
        }
      </AlertNotificationRoot>
    </NavigationContainer>
  );
}

