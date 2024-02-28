import { 
    ImageBackground, 
    Image, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    View, 
    useWindowDimensions, 
    TouchableOpacity, 
    Pressable 
} from 'react-native'

import { 
    ALERT_TYPE, 
    Dialog, 
    AlertNotificationRoot, 
    Toast 
} from 'react-native-alert-notification';

import React from 'react'
import { colors } from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'


const Onboarding = () => {
  const navigation = useNavigation()
  const {width, height} = useWindowDimensions()
  const bwLogoWidth = width * 0.25

  const GoToApp = async () => {
    Dialog.show({
        type: ALERT_TYPE.INFO,
        title: 'Gameoo',
        textBody: 'Vous pouvez utiliser Gameoo sans créer de compte! Néanmoins, vous devez être authentifié pour réclamer vos Recompenses!',
        button: 'Compris',
        onPressButton: () => {
            console.log("got to app")
            Dialog.hide()
        }
    })
  }
  return (
    <SafeAreaView style={{flex:1}}>
        <ImageBackground source={require('../../assets/Images/bg.png')} style={{width: "100%", height:"100%", position: "absolute"}} resizeMode='cover'/>
        <View
            style={{
                marginTop: "30%",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <LottieView source={require('../../assets/Animations/Lotties/controller.json')} autoPlay loop style={{width: 150, height: 150}}/>
        </View>
        <View
            style={{
                backgroundColor: colors.SEMI_TRANSPARENT,
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "65%",
                width: "100%",
                borderTopRightRadius: 45,
                borderTopLeftRadius: 45,
                justifyContent: "space-around",

                elevation: 4
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
                    marginBottom: 30,

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
                        fontFamily: "SF-Regular",
                        fontSize: 24,
                        maxWidth: "55%",
                        textAlign: "center",
                        color: colors.WHITE
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
                        fontSize: 20,
                        fontFamily: "SF-Thin",
                        color: colors.WHITE,
                        textAlign: "center",
                        marginHorizontal: 20,
                        marginTop: 30,
                        fontWeight: "300",
                        maxWidth: "85%",
                        lineHeight: 28
                    }}
                >
                    Jouez à nos jeux et recevez des récompenses inédites!
                    La plateforme sur laquelle jouer, c'est vraiment <Text style={{color: colors.MAIN_COLOR}}>GAGNER</Text>.
                </Text>
            </View>

            <View 
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 30,
                }}
            >
                <Pressable
                    hitSlop={2}
                    onPress={GoToApp}
                >
                    <Text
                        style={{
                            color: colors.WHITE,
                            fontFamily: "SF-Semibold",
                            fontSize: 16,
                            marginBottom: 24
                        }}
                    >
                        COMMENCER
                    </Text>
                </Pressable>
                <TouchableOpacity
                    style={{
                        backgroundColor: "orange",
                        width: "80%",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 10,
                        borderRadius: 10,
                        marginBottom: 24,
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
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({})