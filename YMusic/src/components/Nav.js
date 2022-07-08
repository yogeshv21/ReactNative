import React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { Styles } from "../style/Styles";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Nav = ()=>{
    return(
        <View style={Styles.nav}>
            <TouchableOpacity activeOpacity={.5}><Text> <Icon name={'heart'} color={'#ECECEC'} size={30} /></Text></TouchableOpacity>
            <TouchableOpacity activeOpacity={.5}><Text> <Icon name={'home'} color={'#ECECEC'} size={30} /></Text></TouchableOpacity>
            <TouchableOpacity activeOpacity={.5}><Text> <Icon name={'list-ul'} color={'#ECECEC'} size={30} /></Text></TouchableOpacity>
        </View>  
    )
}

export default Nav;