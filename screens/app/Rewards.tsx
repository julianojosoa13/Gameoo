import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import Coupon from '../../components/Coupon'
import Title from '../../components/Title'
import Categories from '../../components/Categories'
import { AntDesign } from '@expo/vector-icons'
import { colors } from '../../utils/colors'

const categories = [
  {
    id: '0',
    name: 'Reductions',
    slug: 'red'
  },
  {
    id: '1',
    name: 'Bons',
    slug: 'bon'
  }
]

const Rewards = () => {
  const {width,height} = useWindowDimensions()
  const [selectedCategory, setSelectedCategory] = useState()

  const onPress = (cat) => {
    setSelectedCategory(cat)
  }
  return (
    <View style={{flex:1}}> 
      <ImageBackground source={require('../../assets/Images/bg.png')} style={{width, height: "100%", position: "absolute"}} resizeMode='cover'/>
      <View style={{marginTop:38}}/>
      <View
        style={{
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
      >
        <Text style={{color: "grey", width: "90%", height: 20}}>Chercher un jeu...</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen",{games})}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Title title='Les cadeaux disponibles'/>
      <Categories categories={categories} selectedCategory={selectedCategory} onCategoryPress={(cat) => onPress(cat)}/>
      <ScrollView
        contentContainerStyle={{paddingBottom: 100}}
        style={{height:height - 160}}
      >
      {[0,1,2,3,4,5,6,7].map((item)=>{
        return (
          <Coupon />
        )
      })}
      </ScrollView>
    </View>
  )
}

export default Rewards

const styles = StyleSheet.create({})