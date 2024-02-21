import { ImageBackground, Image, SafeAreaView, StyleSheet, Text, View, useWindowDimensions, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'


const Onboarding = () => {
  const navigation = useNavigation()
  const {width, height} = useWindowDimensions()
  const bwLogoWidth = width * 0.25
  return (
    <SafeAreaView style={{flex:1}}>
        <ImageBackground source={require('../../assets/Images/bg.png')} style={{width: "100%", height:"100%", position: "absolute"}} resizeMode='cover'/>
        <Image source={require("../../assets/branding/LOGO-Gameoo-symbole-PNG.png")} style={{marginLeft: 10, marginTop: 75, width: 100, height: 100}}/>
        <View
            style={{
                opacity: 0.87,
                backgroundColor: colors.WHITE_ALT,
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "65%",
                width: "100%",
                borderTopRightRadius: 35,
                borderTopLeftRadius: 35,

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
                    marginTop: 25,

                    elevation: 2
                }}
                activeOpacity={0.7}
            >
                <Image source={require("../../assets/branding/LOGO-Gameoo-symbole--NB-1-PNG.png")} style={{width: bwLogoWidth - 15, height:bwLogoWidth - 15}}/>
            </TouchableOpacity>

            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Text
                    style={{
                        fontFamily: "SF-Thin",
                        fontSize: 28,
                        maxWidth: "55%",
                        textAlign: "center",
                        color: colors.ACCENT_COLOR
                    }}
                >
                    Bienvenue sur {" "} 
                    <Text
                        style={{
                            fontFamily: "Modak",
                            fontSize: 32,
                            color: colors.MAIN_COLOR,
                            lineHeight: 40
                        }}
                    >
                        Gameoo
                    </Text>
                </Text>
                <Text
                    style={{
                        fontSize: 17,
                        fontFamily: "SF-Regular",
                        color: colors.ACCENT_COLOR,
                        textAlign: "center",
                        marginHorizontal: 20,
                        marginTop: 30,
                        fontWeight: "300",
                        maxWidth: "75%",
                        lineHeight: 18
                    }}
                >
                    Jouez à nos jeux et recevez des récompenses inédites!
                    La plateforme sur laquelle jouer, c'est vraiment <Text style={{color: colors.MAIN_COLOR}}>GAGNER</Text>.
                    Jouez à nos jeux et obtenez des recompenses réels auprès de nos partenaires!
                </Text>
            </View>

            <View 
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 30,
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: colors.GREEN,
                        width: "80%",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 10,
                        borderRadius: 10,
                        marginTop: 20,
                    }}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Text
                        style={{
                            fontFamily: "SF-Semibold",
                            color: colors.WHITE,
                            fontSize: 15,
                        }}
                    >
                        SE CONNECTER
                    </Text>
                </TouchableOpacity>

                <Pressable
                    style={{
                        marginTop: 20,
                    }}
                    hitSlop={2}
                >
                    <Text
                        style={{
                            color: colors.ACCENT_COLOR,
                            fontFamily: "SF-Semibold",
                            fontSize: 13,
                        }}
                    >
                        CREER UN COMPTE
                    </Text>
                </Pressable>

            </View>
        </View>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({})