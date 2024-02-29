import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { FontAwesome6 } from '@expo/vector-icons'

interface AvatarProps {
    imageUrl?: string
}

const Avatar = ({imageUrl}: AvatarProps) => {
  return (
    <TouchableOpacity
        style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            borderWidth: 1,
            borderColor: colors.FACEBOOK_BLUE,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.SEMI_TRANSPARENT,
            overflow: 'hidden',
        }}
    >
      {!imageUrl ? (
        <FontAwesome6 name="user-large" size={22} color={colors.ORANGE}/>
      ):(
        <></>
      )}
    </TouchableOpacity>
  )
}

export default Avatar

const styles = StyleSheet.create({})