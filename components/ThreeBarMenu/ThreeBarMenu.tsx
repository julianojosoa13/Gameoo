import { StyleSheet} from 'react-native'
import React from 'react'
import { Menu,MenuOptions, MenuTrigger } from 'react-native-popup-menu'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../../utils/colors'
import { UI_TEXTS } from '../../utils/constants'
import { supabase } from '../../supabase/supabase'
import ThreeBarMenuOption from './ThreeBarMenuOption'

interface ThreeBarMenuProps {
    navigation: any,
    gamerTag: string
}

const ThreeBarMenu = ({navigation, gamerTag}: ThreeBarMenuProps) => {
  const logOut = () => {
    navigation.replace("LogOut")
  }
  return (
    <Menu>
        <MenuTrigger
            style={{paddingHorizontal: 10, paddingVertical: 5}}
        >
            <MaterialCommunityIcons name="dots-vertical" size={25} color="white" />
        </MenuTrigger>
        <MenuOptions
            optionsContainerStyle={{
                marginTop: 30,
                alignItems: "flex-end",
                width: 160,
                borderRadius: 20,
                padding: 20,
                backgroundColor: colors.SEMI_TRANSPARENT_ALT,
            }}
        >
            <ThreeBarMenuOption 
                text={UI_TEXTS.USER_PROFILE}
            />
            <ThreeBarMenuOption 
                text={UI_TEXTS.USER_SETTINGS}
            />

            <ThreeBarMenuOption
                onPress={logOut} 
                text={UI_TEXTS.USER_LOG_OUT}
            />
        
        </MenuOptions>
    </Menu>
  )
}

export default ThreeBarMenu

const styles = StyleSheet.create({})