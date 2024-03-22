import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface TitleProps {
    title: string,
    small?: boolean
}

const Title = ({title, small}:TitleProps) => {
  return (
    <>
        <Text style={{marginLeft:24, marginTop: 5, fontSize: small? 12:24, lineHeight: small? 16:32, color:"white" }}>{title}</Text>
        <View style={{height: 5, width: 20, backgroundColor: "white", marginLeft: 28}}/>
    </>
  )
}

export default Title

const styles = StyleSheet.create({})