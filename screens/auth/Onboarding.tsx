import { ImageBackground, Image, SafeAreaView, StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'


const Onboarding = () => {
  const {width, height} = useWindowDimensions()
  const bwLogoWidth = width * 0.25
  return (
    <SafeAreaView style={{flex:1}}>
        <ImageBackground source={require('../../assets/Images/bg.png')} style={{width: "100%", height:"100%", position: "absolute"}} resizeMode='cover'/>
        <Image source={require("../../assets/branding/LOGO-Gameoo-symbole-PNG.png")} style={{marginLeft: 10, marginTop: 75, width: 100, height: 100}}/>
        <View
            style={{
                opacity: 0.85,
                backgroundColor: colors.WHITE_ALT,
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "65%",
                width: "100%",
                borderTopRightRadius: 35,
                borderTopLeftRadius: 35
            }}
        >
            <TouchableOpacity
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: bwLogoWidth,
                    height: bwLogoWidth,
                    borderRadius: bwLogoWidth /2,
                    backgroundColor: colors.WHITE,
                    alignSelf: "center",
                    marginTop: 25,

                    elevation: 2
                }}
                activeOpacity={0.7}
            >
                <Image source={require("../../assets/branding/LOGO-Gameoo-symbole--NB-1-PNG.png")} style={{width: bwLogoWidth - 15, height:bwLogoWidth - 15}}/>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({})