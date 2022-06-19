import React from 'react';
import { View, Text, Image } from "react-native";
import { Styles } from '../style/Styles';

const Nav = ()=>{
    return(
        <View style={Styles.nav}>
          <Text style={Styles.logo}>User List</Text>
        </View>
    )
};

export default Nav;