import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { colors } from '../utils/colors'

interface WhiteCardProps {
    title?: string,
    children?: ReactNode
}

const WhiteCard = ({title, children}:WhiteCardProps) => {
  return (
    <View
        style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            borderRadius: 25,
            minHeight: 400,
            marginHorizontal: 22,
            marginVertical: 15,
        }}
    >
      <View
        style={{
            marginLeft: 20,
            marginTop: 10,
        }}
      >
        <Text
            style={{
                fontFamily: "SF-Semibold",
                color: "white",
                fontSize: 19
            }}
        >
            {title}
        </Text>
        <View style={{borderBottomWidth: 5, borderBottomColor: colors.WHITE_ALT, width: 30}}/>
      </View>
    </View>
  )
}

export default WhiteCard

const styles = StyleSheet.create({})