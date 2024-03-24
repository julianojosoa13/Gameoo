import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from './Avatar'
import { colors } from '../utils/colors'
import { UI_TEXTS } from '../utils/constants'

interface AvatarBoxProps {
    userTag?: string
}

const AvatarBox = ({userTag}: AvatarBoxProps) => {
  return (
    <View 
          style={{flexDirection: "row", gap: 4, alignItems: "center"}}
        >
          <Avatar />
          <View
            style={{justifyContent: "flex-start"}}
          >
            <Text style={{fontFamily: "SF-Regular", color: colors.WHITE}}>Bon retour!</Text>
            <Text style={{fontFamily: "SF-Semibold", color: colors.WHITE,fontSize:12}}>{userTag? userTag: UI_TEXTS.USER_NOT_CONNECTED}</Text>
          </View>
        </View>
  )
}

export default AvatarBox

const styles = StyleSheet.create({})