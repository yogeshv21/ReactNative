import React from 'react';
import {View, Image, Text, TextInput} from 'react-native'
import { COLORS, SIZES, assets } from '../constants';


function HomeHeader({onSearch}) {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font
    }}>
       <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
       }}>
         <Image source={assets.logo} 
         resizeMode='contain'
         style={{
          width: 90,
          height:25
         }}
         />

         <View style={{
          height: 45,
          width: 45,
          borderRadius: 100
         }}>
           <Image source={assets.person01} 
           style={{
            height: '100%',
            width: '100%'
           }}
           />
         </View>

       </View>
       <View style={{
        marginVertical : SIZES.font
       }}>

        <Text  style={{
          color: COLORS.gray,
          fontSize: SIZES.medium
        }}>
          Hello, Yogesh 
        </Text>
        <Text  style={{
          color: COLORS.white,
          fontSize: SIZES.extraLarge
        }}>
          Let's Explore The World
        </Text>
       </View>

       <View style={{
        marginTop: SIZES.font
       }}>
            <View style={{
              width: '100%',
              borderRadius: SIZES.font,
              backgroundColor: COLORS.gray,
              flexDirection: 'row',
              alignItems: 'center', 
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.font -20
            }}>
              <Image source={assets.search}
               style={{
                height: 20,
                width: 20,
                marginRight: SIZES.base
               }}
              />
               <TextInput placeholder='Search'
               style={{
                flex: 1,
                fontSize: SIZES.large
               }}
               onChangeText={onSearch}
               />
            </View>
       </View>
    </View>
  )
}

export default HomeHeader;



