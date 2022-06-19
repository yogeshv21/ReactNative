import React from 'react';
import { View, Text, Image, Button } from "react-native";
import img from '../assets/Images/download (3).png';
import { Styles } from '../style/Styles';

const TodoCard = ({data, id, onDelete})=>{

  function deleteHandler(){
    onDelete(id)
  }

    return(
        <View style={Styles.todo_card} key={data}>
        <View style={Styles.imgCont}>
          <Image source={img} style={{height: '100%', width: '100%'}} />
        </View>
        <View style={Styles.txtCont}>
          <Text style={Styles.todo_txt}>{data}</Text>
          <Text style={Styles.date_time}>{id}</Text>
          <Button color={'#0AA1DD'} onPress={deleteHandler} title='Remove'/>
        </View>
       </View>
    )
};

export default TodoCard;

