import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Player = ()=>{
    return(
       <View style={Styles.container}>
        <Text>Audio Player</Text>
       </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    }
});

export default Player;