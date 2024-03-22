import { 
  Image,
  ImageBackground, 
  Pressable, 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  useWindowDimensions, 
} from 'react-native'

import React, { useEffect, useState } from 'react'
import AvatarBox from '../../components/AvatarBox'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation, useRoute } from '@react-navigation/native'

import ThreeBarMenu from '../../components/ThreeBarMenu/ThreeBarMenu'
import { colors } from '../../utils/colors'
import GameCard from '../../components/GameCard';
import LottieView from 'lottie-react-native'
import { supabase } from '../../supabase/supabase'
import Title from '../../components/Title'
import Coupon from '../../components/Coupon'

import CustomCarousel from 'carousel-with-pagination-rn';

const Home = () => {
  const {width, height} = useWindowDimensions()
  const navigation = useNavigation()
  const route = useRoute()
  const {gamerTag} = route?.params || ""
  console.log("route:>> ", route.params)
  const [featuredGame, setFeaturedGame] = useState(null)
  const [topGames, setTopGames] = useState([])

  const session = null

  useEffect(()=>{
    const fetchGame = async () => {
      const { data, error } = await supabase
        .from('Games')
        .select('*')
        .limit(1);

      if (error) {
        console.error('Error fetching game:', error.message);
        return;
      }

      if (data && data.length > 0) {
        console.log(data[0])
        setFeaturedGame(data[0]);
      }

      const { data: topGamesData, error: topGamesError } = await supabase
        .from('Games')
        .select('*')
        .limit(5);

      if (topGamesError) {
        console.error('Error fetching top games:', topGamesError.message);
        return;
      }

      if (topGamesData && topGamesData.length > 0) {
        setTopGames(topGamesData);
      }
    }
    fetchGame()
  },[])
  
  return (
    <SafeAreaView 
      style={{
        flex:1,
        // backgroundColor: "#19173D"
        backgroundColor: colors.MAIN_COLOR
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

        <Title title='Offres spéciales' />
        <CustomCarousel
          indicatorColor={[colors.WHITE,colors.SEMI_TRANSPARENT,colors.WHITE]}
          indicatorHeight={[6,9,6]}
          indicatorWidth={[6,20,6]}
          data={[0,1,2,3]}
          renderItem={({item}) => <Coupon />}
        />
              
        <Title title='Populaire'/>

        {featuredGame? (
          <GameCard
            id={featuredGame.id} 
            image={featuredGame.cover}
            likes={featuredGame.likes}
            name={featuredGame.name}
            url={featuredGame.url}
          />
        ):(
          <View
            style={{
              width: width - 42,
              height: width,
              justifyContent: "center",
              alignItems: "center",
              margin: 24,
              backgroundColor: colors.SEMI_WHITE,
              borderRadius: 25
            }}
          >
            <LottieView source={require('../../assets/Animations/Lotties/controller.json')} autoPlay loop style={{width: 75, height: 75}}/>
          </View>
        )}
        <Title title='Top Jeux'/>
        {topGames.length > 0? (

            <ScrollView 
              horizontal
              pagingEnabled
            >
              {topGames?.map((game, index) => {
                const last = index === 4
                return (
                  <GameCard
                    key={game.id}
                    id={game.id}
                    image={game.cover}
                    likes={game.likes}
                    name={game.name}
                    url={game.url}
                    last={last}
                  />
                )
              })}
            </ScrollView>
        ):(
          <View
            style={{
              width: width - 42,
              height: width,
              justifyContent: "center",
              alignItems: "center",
              margin: 24,
              backgroundColor: colors.SEMI_WHITE,
              borderRadius: 25
            }}
          >
            <LottieView source={require('../../assets/Animations/Lotties/controller.json')} autoPlay loop style={{width: 75, height: 75}}/>
          </View>
        )}

      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})