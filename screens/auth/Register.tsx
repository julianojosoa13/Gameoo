import { ActivityIndicator, Alert, AppState, Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, Feather, FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { supabase } from '../../supabase/supabase';
import { Dialog } from 'react-native-alert-notification';

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })

const Register = () => {
  const navigation = useNavigation()
  const {width, height} = useWindowDimensions()
  const bwLogoWidth = width * 0.25

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const signUpWithEmail = async () => {
    if(email.trim() === "" || password === "" || confirmPassword === "") {
        Alert.alert("Auth","Veuillez remplir tous les champs!")
        return
    }

    if(password !== confirmPassword) {
        Alert.alert("Auth", "La confirmation du mot de passe ne concorde pas!")
        return
    }
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) {
        Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Login',
            textBody: 'Veuillez vérifiez votre adresse email!',
            button: 'Ok',
            onPressButton: () => {
                navigation.replace("OTPVerif", {email: email})
                Dialog.hide()
            }
        })
    }
    setLoading(false)
  }
  
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
                            height: 45,
                            borderRadius: 10,
                            elevation: 1,
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Feather name="mail" size={20} color="grey" style={{marginHorizontal: 15}}/>
                        <TextInput autoCapitalize={"none"} placeholder="Adresse email" keyboardType="email-address" style={{ fontFamily: "SF-Regular", marginLeft: 8, fontSize: 17}} onChangeText={(text) => setEmail(text)}/>
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
                            height: 45,
                            borderRadius: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start"
                        }}
                    >
                        <FontAwesome6 name="lock" size={20} color="grey" style={{marginHorizontal: 15}}/>
                        <TextInput placeholder="Mot de passe" style={{fontFamily: "SF-Regular", marginLeft: 8, fontSize: 17}} secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
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
                            height: 45,
                            borderRadius: 10,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start"
                        }}
                    >
                        <FontAwesome6 name="lock" size={20} color="grey" style={{marginHorizontal: 15}}/>
                        <TextInput placeholder="Confirmer le mot de passe" style={{fontFamily: "SF-Regular", marginLeft: 8, fontSize: 17}} secureTextEntry={true} onChangeText={(text) => setConfirmPassword(text)}/>
                    </View>
                </View>
                {loading? (
                    <ActivityIndicator size={"large"} color={"purple"}/>
                ):(
                    <TouchableOpacity
                        style={{
                            backgroundColor: colors.ORANGE,
                            width: "80%",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 10,
                            borderRadius: 10,
                            marginTop: 5,
                            alignSelf: "center"
                        }}
                        onPress={() => signUpWithEmail()}
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
                )}
                
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