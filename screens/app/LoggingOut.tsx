import { ActivityIndicator, ImageBackground, SafeAreaView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { supabase } from '../../supabase/supabase'
import LottieView from 'lottie-react-native'
import { colors } from '../../utils/colors'

const LoggingOut = () => {
  const {width, height} = useWindowDimensions()
  const navigation = useNavigation()
  useEffect(() => {
    const signOut = async () =>{
        const userResponse = await supabase.auth.getUser()
        const {user} = userResponse.data
        console.log(user)
        setTimeout(async ()=>{
            if(!user) navigation.navigate("Onboarding")
            else supabase.auth.signOut()
        }, 2500)
    }
    
    signOut()
  }) 
  return (
    <SafeAreaView 
      style={{
        flex:1,
        backgroundColor: "#19173D",
      }}
    >
      <ImageBackground source={require('../../assets/Images/bg.png')} style={{width, height: "100%", position: "absolute"}} resizeMode='cover'/>
      <View
        style={{
            flex:1,
            justifyContent: "center",
            alignItems: "center"
        }}
      >
        <Text
            style={{
                fontSize: 24,
                color: colors.WHITE,
                fontFamily: "SF-Thin",
                margin: 10,
                textAlign: "center"
            }}
        >
            Déconnexion
        </Text>
        <LottieView source={require('../../assets/Animations/Lotties/rocket.json')} autoPlay loop style={{width: 150, height: 150}}/>
      </View>
    </SafeAreaView>
  )
}

export default LoggingOut

const styles = StyleSheet.create({})