import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { AntDesign } from '@expo/vector-icons'

const GameCard = () => {
  const {width} = useWindowDimensions()
  return (
    <View
        style={{
            alignItems: "center",
            alignSelf: "center",
            borderWidth: 2,
            borderColor: colors.WHITE,
            margin: 15,
            borderRadius: 25,
            backgroundColor: colors.SEMI_WHITE,
            maxWidth: width * 0.75,
        }}
    >
      <TouchableOpacity
        style={{
            alignItems: "center"
        }}
      >
        <Text
            style={{
                color: colors.BLACK,
                fontFamily: "SF-Semibold",
                fontSize: 16
            }}
        >
            Jewel Rush
        </Text>
        <Image 
            source={require("../assets/Images/match3.jpeg")} 
            style={{
                height: 160,
                margin: 20,
            }} 
            resizeMode='contain'
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
            alignSelf: "center",
            backgroundColor: colors.GREEN,
            paddingHorizontal: "20%",
            paddingVertical: 10,
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 15,
            marginBottom: 20
        }}
      >
        <Text style={{fontFamily: "SF-Semibold", color: colors.WHITE_ALT}}>Continuer</Text>
        <AntDesign name="play" size={24} color="black"/>
      </TouchableOpacity>
    </View>
  )
}

export default GameCard

const styles = StyleSheet.create({})