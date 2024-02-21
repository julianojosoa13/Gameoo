import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ActivityIndicator, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native';

const Splash = () => {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(()=>{
        navigation.replace("Onboarding")
    },3200)
  },[])
  return (
    <SafeAreaView style={{flex: 1, justifyContent: "space-between", alignItems: "center"}}>
      <ImageBackground source={require('../../assets/Images/bg.png')} style={{width: "100%", height:"100%", position: "absolute"}} resizeMode='cover'/>
      <View />
      <Image source={require('../../assets/branding/LOGO-Gameoo-PNG.png')} style={{width: 220, height: 220}}/>
      <View
        style={{
            alignItems: "center",
        }}
      >
        <LottieView source={require('../../assets/Animations/Lotties/loading-walk.json')} autoPlay loop style={{width: 120, height: 120}}/>
        <Text style={{fontFamily: "SF-Regular", textAlign: "center", fontSize: 18, marginBottom: 25}}>Gameoo, tous droits réservés, {new Date().getFullYear()}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({})