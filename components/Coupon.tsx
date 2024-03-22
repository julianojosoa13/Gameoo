import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import {LinearGradient} from 'expo-linear-gradient'
import Title from './Title'

const Coupon = () => {
  const {width} = useWindowDimensions()
  const borderWidth = 0
  return (
    <TouchableOpacity
        style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: "row"
        }}
        activeOpacity={0.8}
    >
      <LinearGradient
        start={{x: 0, y:0}}
        end={{x:1, y: 1}}
        colors={["red",colors.ORANGE]}
        style={{
            height: 80,
            width: 80,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.FACEBOOK_BLUE,
            borderRadius: 10,
            borderTopWidth: borderWidth,
            borderLeftWidth: borderWidth,
            borderBottomWidth: borderWidth,
            borderRightWidth: 0.5,
            borderColor: colors.ACCENT_COLOR,
            elevation: 10,
        }}
      >
        <Text
            style={{
                fontFamily: "NovaSquare-Regular",
                color: colors.WHITE,
                fontSize: 26
            }}
        >
            10%
        </Text>
      </LinearGradient>
      <LinearGradient
        start={{x: 0, y:0}}
        end={{x:0.5, y: 0.5}}
        colors={[colors.ORANGE, colors.MAIN_COLOR]}
        style={{
            height:80, 
            width: width-130, 
            borderRadius: 10,
            borderTopWidth: borderWidth,
            borderRightWidth: borderWidth,
            borderBottomWidth: borderWidth,
            borderLeftWidth: 0.5,
            borderColor: colors.ACCENT_COLOR,
            overflow: 'hidden',
            elevation: 10,

            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:"center"
        }}
      >
        <View>
            <Title title='Bon de reduction' small/>
            <Text
                style={{marginLeft:24, color: colors.WHITE, marginVertical:10, fontFamily:"SF-Thin"}}
            >
                Sur tout les achats!
            </Text>
        </View>
        <TouchableOpacity
            style={{
                alignItems: "center",
                justifyContent: "center",
                marginRight: 15,
                
                overflow: "hidden"
            }}
            activeOpacity={0.6}
        >
            <Image 
                source={{uri: "https://efyjgqoglnwvwfahlvtz.supabase.co/storage/v1/object/public/partners/art-blanc.jpg"}} 
                style={{
                    width: 72, 
                    height: 72, 
                    borderRadius: 37,
                    borderColor: colors.WHITE,
                    borderWidth: 3,
                }}
            />
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default Coupon

const styles = StyleSheet.create({})