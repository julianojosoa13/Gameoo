import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MenuOption } from 'react-native-popup-menu'
import { colors } from '../../utils/colors'

interface ThreeBarMenuOptionProps {
    onPress?: any,
    text: string
}

const ThreeBarMenuOption = ({onPress, text}: ThreeBarMenuOptionProps) => {
  return (
    <MenuOption>
        <TouchableOpacity
            onPress={onPress}
            style={{
                paddingVertical: 12,
                paddingHorizontal: 4,
            }}
            hitSlop={2}

        >

            <Text style={{color: colors.WHITE}}>{text}</Text>
        </TouchableOpacity>
    </MenuOption>
  )
}

export default ThreeBarMenuOption

const styles = StyleSheet.create({})