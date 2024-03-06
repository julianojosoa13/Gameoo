import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import { FontAwesome6 } from '@expo/vector-icons'

const OpenedChests = () => {
  return (
    <View
        style={{marginRight: 15}}
    >
      <Text style={{fontFamily: "SF-Semibold", color: colors.WHITE}}>Cadeaux ouverts</Text>
      <View
        style={{justifyContent: "center", alignItems: "center"}}
      >
        <Text style={{fontFamily: "Modak", fontSize: 22, color: "gold"}}>10</Text>
        <FontAwesome6 name="trophy" size={50} color={"gold"} />
      </View>
    </View>
  )
}

export default OpenedChests

const styles = StyleSheet.create({})