import { Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';

const Register = () => {
  const navigation = useNavigation()
  const {width, height} = useWindowDimensions()
  const bwLogoWidth = width * 0.25
  
  return (
    <SafeAreaView style={{flex:1}}>
        <ImageBackground source={require('../../assets/Images/bg.png')} style={{width: "100%", height:"100%", position: "absolute"}} resizeMode='cover'/>
        <TouchableOpacity
            style={{
                position: "absolute",
                marginVertical: 38,
                marginHorizontal: 24
            }}
            hitSlop={8}
            onPress={() => navigation.goBack()}
        >
            <FontAwesome6 name="chevron-left" size={25} color={colors.WHITE_ALT}/>
        </TouchableOpacity>
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
                    marginTop: 15,

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
                        maxWidth: "55%",
                        textAlign: "center",
                        color: colors.MAIN_COLOR
                    }}
                >
                    Créer un Compte
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
                    <Text style={{marginLeft: 8,fontFamily: "SF-Thin", color: colors.WHITE}}>Identifiant</Text>
                    <View
                        style={{
                            width: "100%",
                            backgroundColor: colors.LIGHT_GREY,
                            marginTop: 2,
                            padding: 6,
                            borderRadius: 10,
                            elevation: 1,
                        }}
                    >
                        <TextInput placeholder="Email ou nom d'utilisateur" keyboardType="email-address" style={{width: "100%", fontFamily: "SF-Regular", marginLeft: 8}}/>
                    </View>
                </View>

                <View
                    style={{marginHorizontal: 20, marginBottom: 15}}
                >
                    <Text style={{marginLeft: 8,fontFamily: "SF-Thin", color: colors.WHITE}}>Mot de passe</Text>
                    <View
                        style={{
                            width: "100%",
                            backgroundColor: colors.LIGHT_GREY,
                            marginTop: 2,
                            padding: 6,
                            borderRadius: 10
                        }}
                    >
                        <TextInput placeholder="Mot de passe" style={{width: "100%", fontFamily: "SF-Regular", marginLeft: 8}} secureTextEntry={true}/>
                    </View>
                </View>
                <View
                    style={{marginHorizontal: 20, marginBottom: 15}}
                >
                    <Text style={{marginLeft: 8,fontFamily: "SF-Thin", color: colors.WHITE}}>Confirmer mot de passe</Text>
                    <View
                        style={{
                            width: "100%",
                            backgroundColor: colors.LIGHT_GREY,
                            marginTop: 2,
                            padding: 6,
                            borderRadius: 10
                        }}
                    >
                        <TextInput placeholder="Mot de passe" style={{width: "100%", fontFamily: "SF-Regular", marginLeft: 8}} secureTextEntry={true}/>
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
                    onPress={() => navigation.navigate("FinalStep")}
                >
                    <Text
                        style={{
                            fontFamily: "SF-Semibold",
                            color: colors.WHITE,
                            fontSize: 12,
                        }}
                    >
                        ENREGISTRER
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={{textAlign: "center", marginTop: 10, color: colors.WHITE}}>OU {'\n'}UTILISER</Text>

            <View
                style={{
                    marginHorizontal: 32,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginBottom: 38
                }}
            >
                <TouchableOpacity>
                    <FontAwesome name="facebook-square" size={40} color="blue" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome name="google" size={40} color="orange" />
                </TouchableOpacity>

            </View>
        </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({})