import { FlatList, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../utils/colors'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { supabase } from '../../supabase/supabase'
import GameCard from '../../components/GameCard'

const Games = () => {
  const navigation = useNavigation()
  const [games, setGames] = useState([])
  const {width} = useWindowDimensions()

  useEffect(()=>{
    const fetchGames = async () => {
        const { data, error } = await supabase
          .from('games')
          .select('*')
  
        if (error) {
          console.error('Error fetching game:', error.message);
          return;
        }
  
        if (data && data.length > 0) {
          setGames(data);
        }
    }
    fetchGames()
  })
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
        <FlatList
                data={games}
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
                      customWidth={width/2+10}
                    />
                )}
                contentContainerStyle={{
                  paddingBottom: 140
                }}
            />
    </SafeAreaView>
  )
}

export default Games

const styles = StyleSheet.create({})