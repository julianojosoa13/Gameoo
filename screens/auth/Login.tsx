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
    ActivityIndicator
} from 'react-native'

import React, { useState } from 'react'

import { supabase } from '../../supabase/supabase'
import { colors } from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';

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
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) {
        if(error.message === "Email not confirmed") {
            // Alert.alert("Login","Veuillez confirmez votre adresse email!")
            navigation.navigate("OTPVerif", {email: email})
        } else {
            Alert.alert("Login","Nom d'utilisateur ou mot de passe incorrect!")
            console.log(error.message)
        }
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
                            padding: 8,
                            borderRadius: 20,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start"
                        }}
                    >
                        <FontAwesome6 name="user" size={20} color="grey" style={{marginHorizontal: 15}}/>
                        <TextInput placeholder="Email ou nom d'utilisateur" style={{width: "100%", fontFamily: "SF-Regular"}} onChangeText={(text) => setEmail(text)} autoCapitalize={"none"}/>
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
                            padding: 8,
                            borderRadius: 20,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start"
                        }}
                    >
                        <FontAwesome6 name="lock" size={20} color="grey" style={{marginHorizontal: 15}}/>
                        <TextInput placeholder="Mot de passe" style={{width: "100%", fontFamily: "SF-Regular"}} secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
                    </View>
                </View>
                {loading ? (
                    <ActivityIndicator color={colors.MAIN_COLOR} size={"large"}/>
                ) : (
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

            <Text style={{textAlign: "center", marginTop: 10,color: colors.WHITE}}>OU</Text>
            <Pressable
                style={{
                    alignSelf: "center"
                }}
                hitSlop={2}
                onPress={() => navigation.navigate("Register")}
            >
                <Text
                    style={{
                        color: colors.MAIN_COLOR,
                        fontFamily: "SF-Semibold",
                        fontSize: 16,
                    }}
                >
                    CREER UN COMPTE
                </Text>
            </Pressable>

            <Text
                style={{
                    marginHorizontal: 52,
                    marginTop: 10,
                    fontFamily: "SF-Thin",
                    fontSize: 16,
                    color: colors.WHITE
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

export default Login

const styles = StyleSheet.create({})