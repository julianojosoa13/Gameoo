import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Games = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView
        style={{flex:1}}
    >
        <ImageBackground source={require('../../assets/Images/bg.png')} style={{width: "100%", height:"100%", position: "absolute"}} resizeMode='cover'/>
        <View
          style={{
            marginTop: 38,
            marginHorizontal: 32,
            backgroundColor: colors.WHITE_ALT,
            padding: 10,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: colors.MAIN_COLOR,

            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Text style={{color: "grey", width: "90%"}} onPress={() => navigation.navigate("SearchScreen")}>Chercher un jeu...</Text>
          <TouchableOpacity>
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Games

const styles = StyleSheet.create({})