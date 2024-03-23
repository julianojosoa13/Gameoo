import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../utils/colors'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

interface GameCardProps {
  image?: string;
  likes: number,
  name: string,
  id: string,
  url: string,
  customWidth?: number
}

const GameCard = ({image,name, likes, id, url, customWidth}:GameCardProps) => {
  const {width} = useWindowDimensions()
  const [isLiked, setIsLiked] = useState(false)
  const [likesNbr, setLikesNbr] = useState(likes)
  const cardWidth = !customWidth? width * 0.7 : customWidth * 0.7
  const navigation = useNavigation()

  const onLikeAction = () => {
    setIsLiked(!isLiked)
    isLiked? setLikesNbr(likesNbr-1) : setLikesNbr(likesNbr + 1)
  }
  return (
        <View
          style={[{
            paddingHorizontal: customWidth? 10:40,
            paddingBottom: 20,
            width: !customWidth? width: customWidth
          }]}
        >
          <View
            style={{
              borderColor: colors.LIGHT_GREY,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              backgroundColor: colors.SEMI_WHITE,
              padding: 10,
              borderRadius: 25,
            }}
          >
            {!customWidth &&
              <TouchableOpacity
                style={{
                  ...StyleSheet.absoluteFillObject,
                  left: cardWidth / 2 - 5,
                  top: cardWidth / 2,
                  zIndex: 2,
                  width: 50,
                  height: 50
                }}
                onPress={() => navigation.navigate("Game", {url})}
              >
                <AntDesign 
                  name="playcircleo" 
                  size={50} 
                  color={colors.GREEN} 
                />
              </TouchableOpacity>
            }
            
            
            <Image 
              source={{uri: image}} 
              style={{
                width:cardWidth-20, 
                height:cardWidth-20, 
                borderRadius: 10, 
                marginTop: 10}}          
            />
            <View
              style={{
                flexDirection: !customWidth? "row": 'column', 
                justifyContent: "space-between", 
                alignItems: customWidth? "flex-start":"center",
                marginVertical: 10, 
                width: cardWidth -40}}
            >
              <Text
                style={{
                  fontFamily: "NovaSquare-Regular",
                  color: colors.WHITE,
                  fontSize: customWidth? 14:18,
                  alignSelf: customWidth? "center":"flex-start",
                  textAlign: customWidth? "center":"left"
                }}
              > 
                {name}
              </Text>
              {!customWidth && (
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
              )}
                
            </View>
            {customWidth && (
              <TouchableOpacity
                onPress={() => navigation.navigate("Game", {url})}
              >
                <Text>JOUER</Text>
              </TouchableOpacity>
            )}
           
          </View>
          
        </View>
  )
}

export default GameCard

const styles = StyleSheet.create({})