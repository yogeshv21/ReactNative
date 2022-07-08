import React from "react";
import { View, Text } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
// import {useFonts} from 'expo-font'

const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  colors : {
    ...DefaultTheme.colors,
    backGround: 'transparent'
  }
}
 
const App = ()=>{
  
  return(
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}
       initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
