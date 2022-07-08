import React from "react";
import { View, Text } from "react-native";
import { Styles } from "../style/Styles";

const Title = ()=>{
    return(
        <View style={Styles.title}>
           <Text style={Styles.title_txt}>Y Music</Text>
        </View>
    )
}

export default Title;