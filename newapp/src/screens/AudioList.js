import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AudioList = ()=>{
    return(
       <View style={Styles.container}>
        <Text>Audio List</Text>
       </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    }
});

export default AudioList;