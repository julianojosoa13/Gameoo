import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome6 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../../utils/colors'

const SearchScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView
        style={{flex:1}}
    >
        <ImageBackground source={require('../../assets/Images/bg.png')} style={{width: "100%", height:"100%", position: "absolute"}} resizeMode='cover'/>
        <TouchableOpacity
            style={{
                position: "absolute",
                top: 50,
                left: 10
            }}
            hitSlop={8}
            onPress={() => navigation.goBack()}
        >
            <FontAwesome6 name="chevron-left" size={25} color={colors.WHITE_ALT}/>  
        </TouchableOpacity>
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
          <TextInput placeholder='Chercher un jeu...' autoFocus/>
          <TouchableOpacity>
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})