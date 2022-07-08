import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AudioList from "../screens/AudioList";
import Player from "../screens/Player";
import PlayList from "../screens/PlayList";
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator()

const Navigation = ()=>{
    return(
      <Tab.Navigator>
            <Tab.Screen name={'AudioList'} component={AudioList} options={{
              tabBarIcon: ({color, size})=>{
                  return(
                    <Icon name="folder-open" color={color} size={30}/>
                  )
              }
            }} />
            <Tab.Screen name={'Player'} component={Player}
            options={{
              tabBarIcon: ({color, size})=>{
                return(
                  <Icon name="headphones" color={color} size={30}/>
                )
            }

            }}
            />
            <Tab.Screen name={'PlayList'} component={PlayList}
            
            options={{
              tabBarIcon: ({color, size})=>{
                return(
                  <Icon name="list-ul" color={color} size={30}/>
                )
            }

            }}
            
            />
      </Tab.Navigator>
    )
};

export default Navigation;
