import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React from 'react'
import AvatarBox from '../../components/AvatarBox'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { supabase } from '../../supabase/supabase'
import WhiteCard from '../../components/WhiteCard'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation, useRoute } from '@react-navigation/native'

const Home = () => {
  const {width, height} = useWindowDimensions()
  const navigation = useNavigation()
  const route = useRoute()
  const {gamerTag} = route?.params || ""
  console.log("route:>> ", route.params)

  const session = null
  
  return (
    <SafeAreaView 
      style={{
        flex:1,
        backgroundColor: "#19173D"
      }}
    >
      <ImageBackground source={require('../../assets/Images/bg.png')} style={{width, height: "100%", position: "absolute"}} resizeMode='cover'/>
      <KeyboardAwareScrollView
        contentContainerStyle={{

          paddingBottom: 100
        }}
      >  
        <View
          style={{
            marginTop: 38,
            left: 0,
            width: width,
            height: 80,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20
          }}
        >
          <AvatarBox userTag={gamerTag}/>

          <View
            style={{
              flexDirection:"row",
              gap: 14,
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <MaterialCommunityIcons name="bell-outline" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if(gamerTag) supabase.auth.signOut()
                if(!gamerTag) navigation.navigate("Onboarding")
              }}
            >
              <MaterialCommunityIcons name="dots-vertical" size={25} color="white" />
            </TouchableOpacity>
          </View>

        </View>
              
        <WhiteCard title='Jeux Populaires'>

        </WhiteCard>
        <WhiteCard title='Meilleurs cadeaux du moment'>
          
        </WhiteCard>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})