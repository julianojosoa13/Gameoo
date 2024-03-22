import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../utils/colors'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

interface GameCardProps {
  image?: string;
  likes: number,
  name: string,
  id: number,
  url: string,
  last: boolean
}

const GameCard = ({image,name, likes, id, url, last}:GameCardProps) => {
  const {width} = useWindowDimensions()
  const [isLiked, setIsLiked] = useState(false)
  const [likesNbr, setLikesNbr] = useState(likes)
  const cardWidth = width * 0.8

  const onLikeAction = () => {
    setIsLiked(!isLiked)
    isLiked? setLikesNbr(likesNbr-1) : setLikesNbr(likesNbr + 1)
  }
  return (
    <View
          style={[{
            marginHorizontal: 24,
            borderColor: colors.LIGHT_GREY,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            backgroundColor: colors.SEMI_WHITE,
            padding: 15,
            borderRadius: 25,
          }]}
        >
          <TouchableOpacity
            style={{
              ...StyleSheet.absoluteFillObject,
              left: cardWidth / 2 - 10,
              top: cardWidth / 2,
              zIndex: 2,
              width: 50,
              height: 50
            }}
          >
            <AntDesign 
              name="playcircleo" 
              size={50} 
              color={colors.WHITE_ALT} 
            />
          </TouchableOpacity>
          
          <Image source={{uri: image}} style={{width:cardWidth, height:cardWidth, borderRadius: 25}}/>
          <View
            style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center",marginVertical: 10, width: cardWidth -40}}
          >
            <Text
              style={{
                fontFamily: "NovaSquare-Regular",
                color: colors.WHITE,
                fontSize: 22,
                alignSelf: "flex-start",
              }}
            > 
              {name}
            </Text>
            <Pressable
              style={{flexDirection: "row", gap: 4, alignItems: "center"}}
              onPress={onLikeAction}
            >
              <Text style={{color: colors.WHITE}}>{likesNbr}</Text>
              <MaterialIcons 
                name={isLiked? "favorite": "favorite-outline"} 
                size={24} 
                color="white" />
            </Pressable>
          </View>
        
        </View>
  )
}

export default GameCard

const styles = StyleSheet.create({})