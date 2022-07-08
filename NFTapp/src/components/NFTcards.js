import React from 'react';
import {View, Image, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {assets, COLORS, SHADOWS, SIZES} from '../constants'
import { CircleButton, RectButton } from './Button';
import { SubInfo, Price, Title } from './SubInfo';


function NFTcards({data}) {
    const navigation = useNavigation();
    function navigateToDetails(){
      navigation.navigate('Details', {data})
      console.log('pressed');
    }
    
  return (
     <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
     }}>
        <View style={{
            width: '100%',
            height: 250
            }}>
         <Image source={data.image} 
          resizeMode={'cover'}
          style={{
            height:'100%',
            width:'100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font
          }}
         />
     <CircleButton imgUrl={assets.heart} right={10} top={10}/>
        </View>
        <SubInfo/>
        <View style={{
         width: '100%',
         padding: SIZES.font
        }}>
           <Title
           title={data.name}
           subTitle={data.creator}
           titleSize={SIZES.large}
           subTitleSize={SIZES.small}
           />

           <View style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
           }}>
            <Price price={data.price}/>
            <RectButton
              minWidth={120}
              fontSize ={SIZES.medium}
              handlePress ={navigateToDetails}
            />
           </View>

        </View>
     </View>
  )
}

export default NFTcards;