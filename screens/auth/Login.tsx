import { Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons';

const Login = () => {
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
                height: "75%",
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
                    marginTop: 20,

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
                        fontFamily: "Modak",
                        fontSize: 22,
                        marginTop: 10,
                        maxWidth: "55%",
                        textAlign: "center",
                        color: colors.MAIN_COLOR
                    }}
                >
                    Se Connecter
                </Text>
            </View>

            <View
                style={{
                    width: "100%",
                    paddingHorizontal: 15
                }}
            >
                <View
                    style={{marginHorizontal: 20, marginBottom: 15}}
                >
                    <Text style={{marginLeft: 8,fontFamily: "SF-Thin"}}>Identifiant</Text>
                    <View
                        style={{
                            width: "100%",
                            backgroundColor: colors.WHITE,
                            marginTop: 5,
                            padding: 8,
                            borderRadius: 20
                        }}
                    >
                        <TextInput placeholder="Email ou nom d'utilisateur" style={{width: "100%", fontFamily: "SF-Regular"}}/>
                    </View>
                </View>

                <View
                    style={{marginHorizontal: 20, marginBottom: 15}}
                >
                    <Text style={{marginLeft: 8,fontFamily: "SF-Thin"}}>Mot de passe</Text>
                    <View
                        style={{
                            width: "100%",
                            backgroundColor: colors.WHITE,
                            marginTop: 5,
                            padding: 8,
                            borderRadius: 20
                        }}
                    >
                        <TextInput placeholder="Mot de passe" style={{width: "100%", fontFamily: "SF-Regular"}} secureTextEntry={true}/>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        backgroundColor: colors.GREEN,
                        width: "80%",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 10,
                        borderRadius: 10,
                        marginTop: 5,
                        alignSelf: "center"
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "SF-Semibold",
                            color: colors.WHITE,
                            fontSize: 15,
                        }}
                    >
                        CONNEXION
                    </Text>
                </TouchableOpacity>
                <Text style={{textAlign: "center", marginTop: 10}}>OU</Text>
                <Pressable
                    style={{
                        alignSelf: "center"
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

            <Text
                style={{
                    marginHorizontal: 52,
                    marginTop: 10,
                    fontFamily: "SF-Thin",
                    fontSize: 16
                }}
            >
                Vous préferez utiliser:
            </Text>
            <View
                style={{
                    marginHorizontal: 32,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginTop: 20
                }}
            >
                <TouchableOpacity>
                    <FontAwesome name="facebook-square" size={40} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome name="google" size={40} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome name="instagram" size={40} color="black" />
                </TouchableOpacity>

            </View>
        </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})