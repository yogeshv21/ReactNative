import React from "react";
import { View, Text, StyleSheet} from "react-native";

const PlayList = ()=>{
    return(
       <View style={Styles.container}>
        <Text>Play List</Text>
       </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    }
});

export default PlayList