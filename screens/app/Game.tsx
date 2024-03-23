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
                zIndex: 100
            }}
            hitSlop={18}
            onPress={() => navigation.goBack()}
        >
            <FontAwesome6 name="chevron-left" size={25} color={colors.WHITE_ALT}/>
            <Text
            style={{
                fontSize: 18,
                color: colors.WHITE,
                fontFamily: "SF-Semibold"
            }}
        >
            Quitter
        </Text>
            
        </TouchableOpacity>
        
      </View>
      {loading? (
        <View
            style={{flex:1, justifyContent:"center", alignItems:"center"}}
        >
          <LottieView source={require('../../assets/Animations/Lotties/controller.json')} autoPlay loop style={{width: 150, height: 150}}/>
        </View>
      ) : (
          <WebView source={{uri: url}} style={{flex:1, margin: 24, marginTop: 78}} />
      )
      }
    </View>
  )
}

export default Game

const styles = StyleSheet.create({})