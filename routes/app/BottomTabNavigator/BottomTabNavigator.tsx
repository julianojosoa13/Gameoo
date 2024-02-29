import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../screens/app/Home';
import Games from '../../../screens/app/Games';
import Rewards from '../../../screens/app/Rewards';

import { BlurView } from "expo-blur"
import { colors } from '../../../utils/colors';
import { AntDesign, FontAwesome, FontAwesome6 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerTransparent: true,
            headerBackground: () => (
                <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
            ),
            headerShown: false,
            headerTitleStyle: {
                color: colors.WHITE_ALT
            },
            headerShadowVisible: false,
            tabBarStyle: {
                elevation: 0,
                backgroundColor: "rgba(25,23,61,0.85)",
                margin: 10,
                position: "absolute",
                height: 80,
                borderRadius: 20,
                paddingBottom: 15,
                paddingTop: 15,
            }
        }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
            tabBarIcon: ({focused}) => {
                return (
                    <AntDesign 
                        name={"home"} 
                        size={24} 
                        color={focused? colors.ORANGE:colors.LIGHT_GREY} 
                    />
                )
            },
            title: "Accueil"
        }}
      />
      <Tab.Screen 
        name="Games" 
        component={Games} 
        options={{
            tabBarIcon: ({focused}) => {
                return (
                    <FontAwesome 
                        name={"gamepad"} 
                        size={24} 
                        color={focused? colors.ORANGE:colors.LIGHT_GREY} 
                    />
                )
            },
            title: "Jeux"
        }}  
      />
      <Tab.Screen 
        name="Rewards" 
        component={Rewards} 
        options={{
            tabBarIcon: ({focused}) => {
                return (
                    <FontAwesome 
                        name={"gift"} 
                        size={24} 
                        color={focused? colors.ORANGE:colors.LIGHT_GREY} 
                    />
                )
            },
            title: "Mes Cadeaux"
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})