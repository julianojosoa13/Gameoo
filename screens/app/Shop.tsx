import { ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import { AntDesign, FontAwesome5, FontAwesome6 } from '@expo/vector-icons'
import { colors } from '../../utils/colors'
import { useNavigation } from '@react-navigation/native'

const Shop = () => {
  const {width,height} = useWindowDimensions()
  const navigation = useNavigation()
  return (
    <View style={{flex:1}}> 
      <ImageBackground source={require('../../assets/Images/bg.png')} style={{width, height: "100%", position: "absolute"}} resizeMode='cover'/>
      <FlatList
        ListHeaderComponent={() => {
            return (
            <>
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
                <TextInput placeholder='Tapez pour chercher...' onChangeText={(text) => handleChange(text)}/>
                <TouchableOpacity>
                    <AntDesign name="search1" size={24} color="black" />
                </TouchableOpacity>
                </View>
                </>
            )
        }}
        data={["gold","purple","green", "blue"]}
        keyExtractor={(item) => String(item)}
        numColumns={2}
        renderItem={({item})=>{
            console.log(item)
            return (
                <View
                    style={{width: width/2, paddingHorizontal: 10, paddingVertical: 20}}
                >
                    <View
                        style={{
                            justifyContent:"center",
                            alignItems:"center",
                            borderRadius: 20,
                            backgroundColor: colors.SEMI_WHITE,
                            paddingVertical: 20
                        }}
                    >
                        <Pressable
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 4,
                                zIndex: 100,
                                borderRadius: 25,
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
                               1000
                            </Text>
                            <FontAwesome6 name="coins" size={24} color="gold" />
                            </Pressable>
                        <FontAwesome5 name="gift" size={70} color={item} />
                        <Text
                            style={{
                                padding: 7,
                                backgroundColor: "white",
                                borderRadius: 7,
                                marginTop: 15
                            }}
                        >
                            ACHETER
                        </Text>
                    </View>
                </View>
            )
        }}
      />
    </View>
  )
}

export default Shop

const styles = StyleSheet.create({})