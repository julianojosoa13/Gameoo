import { 
  ImageBackground, 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  useWindowDimensions, 
} from 'react-native'

import React from 'react'
import AvatarBox from '../../components/AvatarBox'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { supabase } from '../../supabase/supabase'
import WhiteCard from '../../components/WhiteCard'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation, useRoute } from '@react-navigation/native'

import ThreeBarMenu from '../../components/ThreeBarMenu/ThreeBarMenu'
import ConsecutiveDays from '../../components/Stats/ConsecutiveDays'
import GPointsWidget from '../../components/Stats/GPointsWidget'
import OpenedChests from '../../components/Stats/OpenedChests'
import { colors } from '../../utils/colors'
import GameCard from '../../components/GameCard'

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
        // backgroundColor: "#19173D"
        backgroundColor: colors.MAIN_COLOR
      }}
    >
      {/* <ImageBackground source={require('../../assets/Images/bg.png')} style={{width, height: "100%", position: "absolute"}} resizeMode='cover'/> */}
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingBottom: 100
        }}
      >  
        <View
          style={{
            marginTop: 38,
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
              gap: 8,
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <MaterialCommunityIcons name="cart-outline" size={30} color="white" />
            </TouchableOpacity>

            <ThreeBarMenu navigation={navigation} gamerTag={gamerTag} />
            
          </View>

        </View>
              
        <WhiteCard title='Mes stats'>
          <View style={{flexDirection: "row", justifyContent: "space-around"}}>
            <ConsecutiveDays />   
            <OpenedChests />
          </View>
          <Text style={{fontFamily: "SF-Semibold", color: colors.WHITE, marginLeft: 24}}>Dernier jeu: </Text>
          <View style={{borderBottomWidth: 4, borderBottomColor: colors.WHITE_ALT, width: 30, marginLeft: 28}}/>
          <GameCard />
        </WhiteCard>

        <WhiteCard title='Jeux Populaires'>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            snapToInterval={width - 52}
            snapToAlignment={"center"}
            decelerationRate={0}
          >
           {
            [1,2,3,4,5].map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    width: width - 52,
                  }}
                >
                  <GameCard />
                </View>
              )
            })
           }
          </ScrollView>

        </WhiteCard>

        <WhiteCard title='Meilleurs cadeaux du moment'>
          
        </WhiteCard>

      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})