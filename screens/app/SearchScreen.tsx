import { FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, FontAwesome6 } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { colors } from '../../utils/colors'
import GameCard from '../../components/GameCard'
import { Game } from '../../models/types'

const SearchScreen = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const {games} = route?.params

  const {width} = useWindowDimensions()

  const [filteredGames, setFilteredGames] = useState<Array<Game>>()

  const handleChange = (text) => {
    if (text.length>= 2) {
      const newList = games.filter((game:Game)=>game.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
      setFilteredGames(newList)
    } else {
      setFilteredGames([])
    }
  }

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
          <TextInput placeholder='Chercher un jeu...' onChangeText={(text) => handleChange(text)} autoFocus/>
          <TouchableOpacity>
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={filteredGames}
          numColumns={2}
          style={{ flexGrow: 1 }}
          keyExtractor={item => String(item?.id)}
          renderItem={({ item, index }) => (
              <GameCard
                key={item.id}
                id={item.id}
                image={item.cover}
                likes={item.likes}
                name={item.name}
                url={item.url}
                customWidth={width/2 - 10}
              />
          )}
          contentContainerStyle={{
            paddingBottom: 140,
            marginHorizontal: 10
          }}
        />
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})