import { FlatList, ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../utils/colors'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { supabase } from '../../supabase/supabase'
import GameCard from '../../components/GameCard'
import Categories from '../../components/Categories'
import { Category, Game } from '../../models/types'
import Title from '../../components/Title'

const Games = () => {
  const navigation = useNavigation()
  const [games, setGames] = useState<Array<Game>>()
  const [categories,setCategories] = useState([])
  const [filteredGames, setFilteredGames] = useState<Array<Game>>([])
  const [selectedCategory, setSelectedCategory] = useState<Category>()
  const {width} = useWindowDimensions()

  console.log("categories :>> ", categories)
  console.log("selectedCat :>> ", selectedCategory)

  const onCategoryChange = (cat:Category) => {
    setSelectedCategory(cat)
  }

  useEffect(()=>{
    if(selectedCategory?.slug == "tout") {
      setFilteredGames(games)
    }
    else{
      const newGamesList = games?.filter((game:Game)=> game.categories.includes(selectedCategory!.slug))
      setFilteredGames(newGamesList)
    }
  }, [selectedCategory])

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
          setFilteredGames(data)
        }
    }
    const fetchCategories = async () => {
      const { data, error } = await supabase
        .from('sorted_categories')
        .select('*')

      if (error) {
        console.error('Error fetching categories:', error.message);
        return;
      }

      if (data && data.length > 0) {
        setCategories(data);
        setSelectedCategory(data[0])
      }
    }
    fetchGames()
    fetchCategories()
  }, [])


  return (
    <SafeAreaView
        style={{flex:1}}
    >
        <ImageBackground source={require('../../assets/Images/bg.png')} style={{width: "100%", height:"100%", position: "absolute"}} resizeMode='cover'/>
        <Pressable
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
            justifyContent: "space-between",
          }}
          onPress={() => navigation.navigate("SearchScreen")}
        >
          <Text style={{color: "grey", width: "90%", height: 20}} onPress={() => navigation.navigate("SearchScreen",{games})}>Chercher un jeu...</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SearchScreen",{games})}>
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
        </Pressable>
        <Categories categories={categories} onCategoryPress={onCategoryChange}/>
        <FlatList
          ListHeaderComponent={() => {
            return (
              <>
                {/* <View
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
                    justifyContent: "space-between",
                  }}
                  onPress={() => navigation.navigate("SearchScreen")}
                >
                  <Text style={{color: "grey", width: "90%", height: 20}} onPress={() => navigation.navigate("SearchScreen",{games})}>Chercher un jeu...</Text>
                  <TouchableOpacity onPress={() => navigation.navigate("SearchScreen",{games})}>
                    <AntDesign name="search1" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <Categories categories={categories} onCategoryPress={onCategoryChange}/> */}
              </>
            )
          }}
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
            marginHorizontal: 10,
          }}
        />
    </SafeAreaView>
  )
}

export default Games

const styles = StyleSheet.create({})