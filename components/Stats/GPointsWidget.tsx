import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'

const GPointsWidget = () => {
  return (
    <View
     style={{
       
        flexDirection: "row"
     }}
    >
      <View
        style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            maxWidth: 60,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20
        }}
      >
        <Text>
            Mes GPoints
        </Text>
      </View>
      <View
        style={{
            padding: 10,
            marginVertical: 10,
            borderRadius: 8,
            backgroundColor: colors.WHITE,
        }}
      >
        <View
            style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}
        >
            <Text style={{fontSize: 15, color: colors.FACE15OK_BLUE, fontWeight: "bold"}}>125 {" "}</Text>
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