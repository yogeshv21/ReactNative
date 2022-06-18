import React from 'react';
import { View, Text, Image, Button } from "react-native";
import { Styles } from '../style/Styles';
import img from '../Images/download (3).png';

const TodoCard = ({data})=>{
  console.log(data);
    return(
        <View style={Styles.todo_card} key={data}>
        <View style={Styles.imgCont}>
          <Image source={img} style={{height: '100%', width: '100%'}} />
        </View>
        <View style={Styles.txtCont}>
          <Text style={Styles.todo_txt}>{data}</Text>
          <Button title='Remove'/>
        </View>
       </View>
    )
};

export default TodoCard;

