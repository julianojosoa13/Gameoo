import { ActivityIndicator, Image, ImageBackground, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesome6 } from '@expo/vector-icons'
import { colors } from '../../utils/colors'
import { useNavigation, useRoute } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import { supabase } from '../../supabase/supabase'
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'



const OTPVerification = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const inputRefs = Array(6).fill(0).map((_, i) => useRef(null));
  const [codeList, setCodeList] = useState(Array(6).fill(''))
  const [loading, setLoading] = useState(false)

  const {email} = route.params

  const {width, height} = useWindowDimensions()
  const bwLogoWidth = width * 0.25

  const handleInputChange = (text: string, index: number) => {
    if( text.trim() === "") return

    if (text.length === 1 && index < 5) {
      inputRefs[index + 1].current.focus();
    }
    // Handle storing the input value, e.g., in state
    let activationCode =  [...codeList]
    activationCode[index] = text

    setCodeList(activationCode)
  };

  const handleBackspace = (event: InputEvent, index: number) => {
    if (event.nativeEvent.key === 'Backspace' && index > 0) {
      inputRefs[index - 1].current.focus()
    }
    // Handle removing the input value, e.g., in state
    let activationCode =  [...codeList]
    activationCode[index] = ""

    setCodeList(activationCode)
  };
  const resendCode = async () => {
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          // set this to false if you do not want the user to be automatically signed up
          shouldCreateUser: false,
        },
      })

    console.log(data,error)
    setLoading(false)
  }
  const VerifOTP = async () => {
    setLoading(true)
    const code = String(codeList.join(''))
    console.log(code)
    console.log(typeof(code))
    console.log(code.length)

    const {
        data: { session },
        error,
      } = await supabase.auth.verifyOtp({
        email,
        token: code,
        type: 'email',
      })

    if (error) {
        console.log(error)
        if(error.message === "Token has expired or is invalid") {
            Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: 'Verification',
                textBody: 'Le code est invalide ou a déjà expiré!',
                button: 'Renvoyer',
                onPressButton: async () => {
                    inputRefs.map(input => {
                        input?.current?.clear()
                    })
                    setCodeList(Array(6).fill(''))
                    Dialog.hide()
                    await resendCode()

                }
            })
        }
        setLoading(false)
        return
    }
        
    setLoading(false)
  }

  useEffect(()=>{
    const code = String(codeList.join(''))
    if(code.trim().length === 6) {
        Keyboard.dismiss()
        VerifOTP()
    }
  }, [codeList])

  return (
    <SafeAreaView style={{flex:1}}>
        <ImageBackground source={require('../../assets/Images/bg.png')} style={{width: "100%", height:"100%", position: "absolute"}} resizeMode='cover'/>
        
        <View
            style={{
                marginTop: "25%",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <LottieView source={require('../../assets/Animations/Lotties/controller.json')} autoPlay loop style={{width: 150, height: 150}}/>
        </View>
        
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
        
        <View
            style={{
                backgroundColor: colors.SEMI_TRANSPARENT,
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "65%",
                width: "100%",
                borderTopRightRadius: 35,
                borderTopLeftRadius: 35,
                justifyContent: "space-around",

                elevation: 2
            }}
        >
            <View>
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
                            fontSize: 24,
                            marginTop: 10,
                            maxWidth: "55%",
                            textAlign: "center",
                            color: colors.MAIN_COLOR
                        }}
                    >
                        Confirmez votre Compte
                    </Text>
                </View>
            </View>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: "center", gap:6 }}>
                    {inputRefs.map((ref, index) => (
                        <TextInput
                            key={index}
                            ref={ref}
                            style={{ borderWidth: 1, width: 50, height: 50, textAlign: 'center', borderRadius: 10, borderColor: colors.WHITE, color: colors.WHITE, fontSize: 25 }}
                            maxLength={1}
                            keyboardType="number-pad"
                            onChangeText={(text) => handleInputChange(text, index)}
                            onKeyPress={(event) => handleBackspace(event, index)}
                            autoCapitalize='none'
                        />
                    ))}
                </View>
                <View
                    style={{
                        alignSelf: "center"
                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 24,
                            maxWidth: "85%",
                            color: colors.WHITE,
                            fontFamily: "SF-Thin",
                            marginVertical: 20,
                        }}
                    >
                        Veuillez entrer le code qu'on vous a envoyé à votre adresse email!
                    </Text>
                </View>
                
            </View>
            {loading? (
                <ActivityIndicator size={"large"} color={"purple"}/>
            ) :(
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
                    onPress={VerifOTP}
                >
                    <Text
                        style={{
                            fontFamily: "SF-Semibold",
                            color: colors.WHITE,
                            fontSize: 15,
                        }}
                    >
                        CONFIRMER MON COMPTE
                    </Text>
                </TouchableOpacity>
            )}

        </View>
    </SafeAreaView>
  )
}

export default OTPVerification

const styles = StyleSheet.create({})