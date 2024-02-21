import { StyleSheet, Text, View, SafeAreaView, ImageBackground, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(()=>{
        navigation.replace("Onboarding")
    },3000)
  },[])
  return (
    <SafeAreaView style={{flex: 1, justifyContent: "space-between"}}>
      <ImageBackground source={require('../../assets/Images/bg.png')} style={{width: "100%", height:"100%", position: "absolute"}} resizeMode='cover'/>
      <View />
      <Text style={{fontFamily: "SF-Regular", textAlign: "center", fontSize: 18}}>Gameoo, tous droits réservés, {new Date().getFullYear()}</Text>
    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({})