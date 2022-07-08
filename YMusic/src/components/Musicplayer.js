import React from 'react';
import {useRef, useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, Image, FlatList, Dimensions, Animated } from 'react-native';
import { Styles } from '../style/Styles';
import { Slider } from '@miblanchard/react-native-slider';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Songs } from '../data/data';

const {width, height} = Dimensions.get('window')

const Musicplayer = () => {
    const scrollX = useRef(new Animated.Value(0)).current

    useEffect(()=>{
      scrollX.addListener(({value})=>{
    
      });
    }, [])
   
    const songProvider = ({index, item})=>{
        return(
           <Animated.View style={{
            width: width,
            alignItems: 'center',
            justifyContent: 'center'
           }} key={item.id}>
             <View style={Styles.slideWraper}>
            <Image style={Styles.imageWraper} source={item.image}/>
            </View>
           </Animated.View>
        )
    }

    return (
        <View style={Styles.container}>
           <Animated.FlatList
           data={Songs}
           renderItem={songProvider}
           keyExtractor={(item)=>{
             item.id
           }}
           horizontal
           pagingEnabled
           showsHorizontalScrollIndicator={false}
           scrollEventThrottle={16}
           onScroll={Animated.event(
            [
                {
                    nativeEvent: {
                        contentOffset: {
                            X: scrollX
                        }
                    }
                }
            ],
            {useNativeDriver: true}
           )}
           />
            <View style={Styles.title_artist_cont}>
                <Text style={{ fontSize: 30, color: 'white' }}>xyz title</Text>
                <Text style={{ fontSize: 20, color: '#ffffff9e' }}>xyz artist</Text>
            </View>
            <View style={Styles.slideBarCont}>
                <Slider
                    style={Styles.slider}
                    value={30}
                    minimumValue={0}
                    maximumValue={100}
                    onSlidingComplete={() => { }}
                    minimumTrackTintColor={'white'}
                    maximumTrackTintColor={'#353535'}
                    thumbTintColor={'white'}
                />
                <View style={Styles.timing_cont}>
                    <Text style={[Styles.minTime, Styles.Time]}>0:00</Text>
                    <Text style={[Styles.maxTime, Styles.Time]}>3:00</Text>
                </View>
            </View>
            <View style={Styles.btnCont}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text>
                        <Icon name={'backward'} color={'#ECECEC'} size={40} />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ borderRadius: 100, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', paddingVertical: 20, paddingHorizontal: 23 }}
                    activeOpacity={0.5}>
                    <Text>
                        <Icon name={'pause'} color={'black'} size={45} />
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text>
                        <Icon name={'forward'} color={'#ECECEC'} size={40} />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Musicplayer;
