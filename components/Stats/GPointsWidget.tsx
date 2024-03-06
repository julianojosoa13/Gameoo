import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'

const GPointsWidget = () => {
  return (
    <View
     style={{
        backgroundColor: colors.SEMI_WHITE,
        borderColor: colors.WHITE,
        borderWidth: 2,
        flexDirection: "row",
        borderRadius: 8,
        marginVertical: 20
     }}
    >
      <View
        style={{
            // backgroundColor: "rgba(255,255,255,0.2)",
            maxWidth: 100,
            justifyContent: "center",
            alignItems: "center",
        }}
      >
        <Text 
            style={{
                textAlign: "center",
                marginHorizontal: 10,
                color: "teal",
                fontFamily: "SF-Semibold",
                fontSize: 18
            }}
        >
            Mes GPoints
        </Text>
      </View>
      <View
        style={{
            padding: 10,
            marginVertical: 10,
            borderColor: "red",
        }}
      >
        <View
            style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}
        >
            <Text style={{fontSize: 15, color: colors.FACEBOOK_BLUE, fontWeight: "bold"}}>125 {" "}</Text>
            <Image source={require('../../assets/Gems/blue.png')} style={{width: 30, height: 30}}/>
        </View>

        <View
            style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}
        >
            <Text style={{fontSize: 15, color: colors.RED, fontWeight: "bold"}}>350 {" "}</Text>
            <Image source={require('../../assets/Gems/red.png')} style={{width: 30, height: 30}}/>
        </View>

        <View
            style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}
        >
            <Text style={{fontSize: 15, color: colors.PURPLE, fontWeight: "bold"}}>7 {" "}</Text>
            <Image source={require('../../assets/Gems/purple.png')} style={{width: 30, height: 30}}/>
        </View>
      </View>  
    </View>
  )
}

export default GPointsWidget

const styles = StyleSheet.create({})