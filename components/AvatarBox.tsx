import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from './Avatar'
import { colors } from '../utils/colors'

interface AvatarBoxProps {
    userTag?: string
}

const AvatarBox = ({userTag}: AvatarBoxProps) => {
  return (
    <View 
          style={{flexDirection: "row", gap: 12, alignItems: "center"}}
        >
          <Avatar />
          <View
            style={{justifyContent: "space-around"}}
          >
            <Text style={{fontFamily: "SF-Regular", color: colors.WHITE}}>Bon retour!</Text>
            <Text style={{fontFamily: "SF-Semibold", color: colors.WHITE}}>{userTag? userTag: "Anomyme"}</Text>
          </View>
        </View>
  )
}

export default AvatarBox

const styles = StyleSheet.create({})