import { 
    Image, 
    ImageBackground, 
    Pressable, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View, 
    useWindowDimensions, 
    Alert,
    AppState,
    ActivityIndicator,
    Keyboard
} from 'react-native'

import React, { useState } from 'react'

import { supabase } from '../../supabase/supabase'
import { colors } from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigation = useNavigation()
  const {width, height} = useWindowDimensions()
  const bwLogoWidth = width * 0.25

  const signInWithEmail = async () => {
    if(email.trim() === "" || password === "") return
    setLoading(true)
    Keyboard.dismiss()
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
        if(error.message === "Email not confirmed") {
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Login',
                textBody: 'Veuillez vérifiez votre adresse email!',
                button: 'Ok',
                onPressButton: () => {
                    navigation.navigate("OTPVerif", {email: email})
                    Dialog.hide()
                }
            })
            
        } else {
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: 'Login',
                textBody: "Nom d'utilisateur ou mot de passe incorrect!",
                button: 'Fermer',
                onPressButton: () => {
                    console.log(error.message)
                    Dialog.hide()
                }
            })
           
        }
    }
    setLoading(false)
  }
  
  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex:1}}>
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
                justifyContent: 'space-between',
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
                    <Text style={{marginLeft: 8,fontFamily: "SF-Thin",color: colors.WHITE}}>Identifiant</Text>
                    <View
                        style={{
                            width: "100%",
                            backgroundColor: colors.LIGHT_GREY,
                            marginTop: 5,
                            borderRadius: 20,
                            flexDirection: "row",
                            alignItems: "center",
                            height: 50
                        }}
                    >
                        <FontAwesome6 name="user" size={20} color="grey" style={{marginHorizontal: 15}}/>
                        <TextInput keyboardType="email-address" placeholder="Email ou nom d'utilisateur" style={{ fontFamily: "SF-Regular", fontSize: 17}} onChangeText={(text) => setEmail(text)} autoCapitalize={"none"}/>
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
                            marginTop: 5,
                            borderRadius: 20,
                            flexDirection: "row",
                            alignItems: "center",
                            height: 50
                        }}
                    >
                        <FontAwesome6 name="lock" size={20} color="grey" style={{marginHorizontal: 15}}/>
                        <TextInput placeholder="Mot de passe" style={{fontFamily: "SF-Regular", fontSize: 17}} secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
                    </View>
                </View>
                {loading ? (
                    <ActivityIndicator color={colors.MAIN_COLOR} size={"large"}/>
                ) : (
                    <TouchableOpacity
                        style={{
                            backgroundColor: colors.ORANGE,
                            justifyContent: "center",
                            alignItems: "center",
                            padding: 10,
                            borderRadius: 10,
                            marginTop: 20,
                            marginHorizontal: 20
                        }}
                        onPress={() => signInWithEmail()}
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
                )}
                
            </View>
            
            <Text
                style={{
                    fontFamily: "SF-Regular",
                    color: colors.WHITE,
                    alignSelf: "center",
                    marginTop: 15,
                    fontSize: 12
                }}
            >
                PAS ENCORE DE COMPTE? {' '}
                
                <Text
                    style={{
                        color: colors.ORANGE,
                        fontFamily: "SF-Regular",
                        fontSize: 14,
                        marginTop: 10
                    }}
                    onPress={() => navigation.navigate("Register")}
                >
                    CREER
                </Text>
            </Text>            
            <View style={{marginTop: 10,backgroundColor: colors.WHITE, height: 3, width: 50, alignSelf: "center"}} />
            
            <View
                style={{
                    marginHorizontal: 32,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginBottom: 20,
                    backgroundColor: colors.SEMI_TRANSPARENT,
                    paddingVertical: 10,
                    borderRadius: 25,
                    marginTop: 15,
                }}
            >
                
                <TouchableOpacity>
                    <FontAwesome name="facebook-square" size={40} color={colors.FACEBOOK_BLUE} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome name="google" size={40} color="orange" />
                </TouchableOpacity>

            </View>
        </View>
    </KeyboardAwareScrollView>
  )
}

export default Login

const styles = StyleSheet.create({})