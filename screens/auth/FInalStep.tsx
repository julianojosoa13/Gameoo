import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { supabase } from '../../supabase/supabase'

const FinalStep = () => {
  const navigation = useNavigation()
  const {width, height} = useWindowDimensions()
  const bwLogoWidth = width * 0.25

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={require('../../assets/Images/bg.png')} style={{width: "100%", height:"100%", position: "absolute"}} resizeMode='cover'/>
        
        <Image source={require("../../assets/branding/LOGO-Gameoo-symbole-PNG.png")} style={{marginLeft: 10, marginTop: 75, width: 100, height: 100}}/>
        <View
            style={{
                backgroundColor: colors.SEMI_TRANSPARENT,
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "75%",
                width: "100%",
                borderTopRightRadius: 35,
                borderTopLeftRadius: 35,
                justifyContent: "space-around",

                elevation: 2
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
                    marginTop: 20,

                    elevation: 2
                }}
                activeOpacity={0.7}
            >
                <LottieView source={require("../../assets/Animations/Lotties/hi.json")} autoPlay loop style={{width: 110, height: 110}}/>    
            </TouchableOpacity>

            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text
                    style={{
                        fontFamily: "Modak",
                        fontSize: 22,
                        marginTop: 10,
                        maxWidth: "55%",
                        textAlign: "center",
                        color: colors.MAIN_COLOR
                    }}
                >
                    Avant de pouvoir commencer
                </Text>
            </View>
            <View
                style={{alignItems: "center"}}
            >
                <Text
                    style={{
                        textAlign: "center",
                        marginTop: 20,
                        fontSize: 17,
                        color: colors.WHITE,
                        fontFamily: "SF-Regular"
                    }}
                >
                    Choisissez votre nom de Gamer
                </Text>
                <View
                    style={{
                        width: "75%",
                        backgroundColor: colors.LIGHT_GREY,
                        marginTop: 15,
                        padding: 8,
                        borderRadius: 20,
                    }}
                >
                    <TextInput placeholder="Nom d'utilisateur" style={{width: "100%", fontFamily: "SF-Regular", marginLeft: 8}}/>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: colors.GREEN,
                        width: "80%",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 10,
                        borderRadius: 10,
                        marginTop: 25,
                        alignSelf: "center",
                    }}
                    onPress={()=> supabase.auth.signOut()}
                >
                    <View
                        style={{flexDirection: "row",alignItems: "center"}}
                    >
                        <Text
                            style={{
                                fontFamily: "SF-Semibold",
                                color: colors.WHITE,
                                fontSize: 15,
                                marginRight: 10
                            }}
                        >
                            CONTINUER
                        </Text>
                        <FontAwesome6 name="arrow-right" size={25} color={colors.WHITE_ALT}/>
                    </View>
                    
                </TouchableOpacity>

            </View>
        </View>
    </View>
  )
}

export default FinalStep

const styles = StyleSheet.create({})