import { 
  Alert,
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

import React, { useEffect, useRef, useState } from 'react'
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
import { RefProps } from 'carousel-with-pagination-rn/lib/typescript/Interfaces'
import { AntDesign } from '@expo/vector-icons'

const Home = () => {
  const carouselRef = useRef<RefProps>(null)
  const gamesCarouselRef = useRef<RefProps>(null)
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
        .from('populargame')
        .select('*')
        .limit(1)

      if (error) {
        console.error('Error fetching game:', error.message);
        return;
      }

      if (data && data.length > 0) {
        console.log(data[0])
        setFeaturedGame(data[0]);
      }

      const { data: topGamesData, error: topGamesError } = await supabase
        .from('randomgames')
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

    const carouselAnim = (carouselIndex, direction) => {
      setTimeout(()=>{
        let currentIndex = 0
        let newDirection = 1
        if(direction === 1) {
          carouselRef.current?.showNextItem()
          currentIndex = carouselIndex + 1
        }
        else {
          carouselRef.current?.showPreviousItem()
          currentIndex = carouselIndex - 1
        }
        if(currentIndex == 3 ) newDirection = 0
        else{
          if(currentIndex == 0) newDirection = 1
          else newDirection = direction
        }
        carouselAnim(currentIndex, newDirection)
      },3000)
    }
    fetchGame()
    carouselAnim(0,1)
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
          ref={carouselRef}
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
          <View>
            <TouchableOpacity
              style={{
                ...StyleSheet.absoluteFillObject,
                top: 34,
                height: width*0.8,
                width:34,
                alignItems: "center",
                justifyContent: "center",
                zIndex:2
              }}
              onPress={()=> gamesCarouselRef.current?.showPreviousItem()}
            >
              <AntDesign name="caretleft" size={24} color="white" />
            </TouchableOpacity>
            <CustomCarousel
              ref={gamesCarouselRef}
              data={topGames}
              renderItem={({item}) =>{
                return(
                  <GameCard
                    key={item.id}
                    id={item.id}
                    image={item.cover}
                    likes={item.likes}
                    name={item.name}
                    url={item.url}
                  />
                )
              }}
              indicatorHeight={[10,12,10]}
              indicatorWidth={[10,16,10]}
              indicatorColor={["white", "orange","white"]}
            />
            <TouchableOpacity
              style={{
                ...StyleSheet.absoluteFillObject,
                top: 34,
                left: width - 34,
                height: width*0.8,
                width:34,
                alignItems: "center",
                justifyContent: "center",
                zIndex:2,
              }}
              onPress={()=> gamesCarouselRef.current?.showNextItem()}
            >
              <AntDesign name="caretright" size={24} color="white" />
            </TouchableOpacity>
          </View>
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