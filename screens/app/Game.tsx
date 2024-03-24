import { Alert, BackHandler, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { WebView } from 'react-native-webview';
import { useNavigation, useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { colors } from '../../utils/colors';
import { UserContext } from '../../context/UserContext';
import { addCoinsToUserProfile } from '../../utils/helper';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';

const Game = () => {
  const {width, height} = useWindowDimensions()
  const navigation = useNavigation()
  const route = useRoute()
  const [loading, setLoading] = useState(true)
  const [points, setPoints] = useState(0)
  const {userProfile} = useContext(UserContext)

  const onGoBack = () => {
    const sendData = async () => {
      await addCoinsToUserProfile(userProfile!.user_id, points)
    }

    sendData()
    console.log(points)
    if(points > 0) {
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: "Bravo",
        textBody: `Vous avez gagner ${points} Points!`,
        button: "Ok",
      })
    }
    navigation.goBack()
  }

  useEffect(()=> {
    const loadingTimer = setInterval(() => {
        setLoading(false)
        clearInterval(loadingTimer)
    }, 2200);

    const pointsTimer = setInterval(() => {
      setPoints(prevPoints => {
        console.log(prevPoints)
        return prevPoints + 15
      });
    }, 30000); // 60000 milliseconds = 1 minute

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      // Perform cleanup when navigating away from the screen
      const sendData = async () => {
        await addCoinsToUserProfile(userProfile!.user_id, points)
      }

      sendData()
      console.log(points)
      if(points > 0) {
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: "Bravo",
          textBody: `Vous avez gagner ${points} Points!`,
          button: "Ok",
        })
      }
      // Add code here to save the current points or perform any other necessary actions
      return false; // Return false to prevent default back button behavior
    });

    return async () => {
      clearInterval(pointsTimer); // Clean up the timer when the component unmounts or the dependencies change
      backHandler.remove()
    };

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
                onPress={() => onGoBack()}
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

            <Pressable
              style={{
                position:"absolute",
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
                zIndex: 100,
                backgroundColor: "white",
                borderRadius: 25,
                right: 44,
                padding: 5,
                paddingHorizontal: 20
              }}
            >
              <Text
                style={{
                  color: colors.ACCENT_COLOR,
                  fontFamily: "SF-Semibold"
                }}
              >
                {userProfile.coins}
              </Text>
              <FontAwesome6 name="coins" size={24} color="gold" />
            </Pressable>
           
            
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