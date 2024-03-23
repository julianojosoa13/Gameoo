import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { WebView } from 'react-native-webview';
import { useNavigation, useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { colors } from '../../utils/colors';

const Game = () => {
  const {width, height} = useWindowDimensions()
  const navigation = useNavigation()
  const route = useRoute()
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    setTimeout(() => {
        setLoading(false)
    }, 2200);
  }, [])

  const {url} = route.params


  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../../assets/Images/bg.png')} style={{width, height: "100%", position: "absolute", flex:1}} resizeMode='cover'/>
      
      {loading? (
        <View
            style={{flex:1, justifyContent:"center", alignItems:"center"}}
        >
          <LottieView source={require('../../assets/Animations/Lotties/controller.json')} autoPlay loop style={{width: 150, height: 150}}/>
        </View>
      ) : (
        <>
          <View
            style={{
                top: 24,
                left:20,
                flexDirection: "row",
                alignItems: "center",
                height: 60,
            }}
          >
            <TouchableOpacity
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                    zIndex: 100,
                    backgroundColor: colors.ACCENT_COLOR,
                    padding:3,
                    borderRadius: 25,
                }}
                hitSlop={18}
                onPress={() => navigation.goBack()}
            >
                <FontAwesome6 name="chevron-left" size={25} color={colors.WHITE_ALT} style={{marginLeft: 10}}/>
                <Text
                  style={{
                      fontSize: 18,
                      color: colors.WHITE,
                      fontFamily: "SF-Semibold",
                      marginRight: 20
                  }}
                >
                    Quitter
                </Text>
                
            </TouchableOpacity>
           
            
          </View>
          <View
            style={{
              position: "absolute",
              top: 82,
              width: "100%", 
              height: 50, 
              backgroundColor: colors.SEMI_TRANSPARENT,
              paddingHorizontal: 24,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          > 
            <Text
              style={{
                fontFamily: "SF-Semibold",
                color: "white",
                fontSize: 22
              }}
            >
              Votre Score: {' '}
              <Text>
                {0}
              </Text>
            </Text>
          </View>
          <WebView source={{uri: url}} style={{flex:1, margin: 24, marginTop: 78,}} />
        </>
      )
      }
    </View>
  )
}

export default Game

const styles = StyleSheet.create({})