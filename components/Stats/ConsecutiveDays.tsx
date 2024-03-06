import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'

const ConsecutiveDays = () => {
  return (
    <View
        style={{
            padding: 10,
            backgroundColor: 'rgba(255,255,255,0.5)',
            margin: 15,
            borderRadius: 15
        }}
    >
      <Text
        style={{
            fontWeight: "bold",
            color: colors.ORANGE,
            fontSize: 18
        }}
      >
        Jours Actifs : 
      </Text>
      <Text
        style={{
            marginLeft: 8,
            color: colors.GREEN,
            fontFamily: "SF-Semibold",
            fontSize: 32
        }}
      >
        10
      </Text>
    </View>
  )
}

export default ConsecutiveDays

const styles = StyleSheet.create({})