import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import { supabase } from '../../supabase/supabase'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ALERT_TYPE, Dialog, Toast } from 'react-native-alert-notification'

const FinalStep = () => {
  const navigation = useNavigation()
  const {width, height} = useWindowDimensions()
  const bwLogoWidth = width * 0.25
  const [userTag, setUserTag] = useState("")
  const [loading, setLoading] = useState(false)

  
  const setGamerTag = async () => {
    setLoading(true)
    const isValidTag = /^[a-zA-Z0-9]+$/.test(userTag);
    if(userTag.trim() === "" || !isValidTag || !userTag || userTag === "") {
        Dialog.show({
            type: ALERT_TYPE.WARNING,
            title: "GamerTag Interdit",
            textBody: "Ce nom d'utilisateur est incorrect!\nLe Gamer TAG ne doit contenir que des chiffres et des lettres.\nLes charactères spéciaux tels que les espaces sont interdits!",
            button: "Ok"
        })
        setLoading(false)
        return
    }
    const user = await supabase.auth.getUser();

    if (!user) {
        console.error('User is not authenticated');
        setLoading(false)
        return;
    }

    const userId = user.data.user?.id;;

    const { error } = await supabase
        .from('UserProfile')
        .upsert({ user_id: userId, gamertag: userTag.trim() }, { returning: 'minimal' });

    if (error) {
        Toast.show({
            type: ALERT_TYPE.WARNING,
            title: "GamerTag",
            textBody: "Ce nom d'utilisateur est déjà pris!",
        })
        setLoading(false)
        return;
    }
    setLoading(false)
    console.log('Gamer tag set successfully');
    supabase.auth.signOut()
  }

  const checkGamerTag = async () => {
    const res = await supabase.auth.getUser();

    if (!res.data) {
        console.error('User is not authenticated');
        return;
    }

    const userId = res.data.user?.id;

    const { data, error } = await supabase
        .from('UserProfile')
        .select('gamertag')
        .eq('user_id', userId);

        if (error) {
        console.error('Error fetching gamerTag:', error.message);
        return;
        }

        const gamerTag = data[0]?.gamertag;
        if(!gamerTag) {
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: "Gameoo",
                textBody: "Bienvenue dans GAMEOO!\nChoisissez votre Gamer TAG!",
                button: "Ok"
            })
        } else {
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: "Gameoo",
                textBody: "Bienvenue dans GAMEOO!\n\n" + gamerTag,
                button: "Ok",
            })
        }
  }

  useEffect(()=>{
    checkGamerTag()
  }, [])

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
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
                    Avant de commencer à jouer
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
                    <TextInput placeholder="Nom d'utilisateur" style={{width: "100%", fontFamily: "SF-Regular", marginLeft: 8}} value={userTag} onChangeText={(text) => setUserTag(text)}/>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: colors.ORANGE,
                        width: "40%",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 10,
                        borderRadius: 10,
                        marginTop: 25,
                        alignSelf: "center",
                    }}
                    onPress={setGamerTag}
                >
                    <View
                        style={{flexDirection: "row",alignItems: "center",}}
                    >
                        {loading? (
                            <ActivityIndicator size={"large"} color={"purple"}/>
                        ) :(
                        <>
                            <Text
                                style={{    
                                    fontFamily: "SF-Semibold",
                                    color: colors.WHITE,
                                    fontSize: 15,
                                    marginRight: 10
                                }}
                            >
                                GO
                            </Text>
                            <FontAwesome6 name="arrow-right" size={25} color={colors.WHITE_ALT}/>
                        </>
                        )}
                        
                    </View>
                    
                </TouchableOpacity>

            </View>
        </View>
    </KeyboardAwareScrollView>
  )
}

export default FinalStep

const styles = StyleSheet.create({})