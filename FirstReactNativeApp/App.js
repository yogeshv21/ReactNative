import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, SafeAreaView, Image, FlatList } from "react-native";
import { Styles } from './style/Styles';
import TodoCard from './component/ToDoCard';
import Nav from './component/Nav';

const App = ()=>{

  const [userInp, setuserInp] = React.useState('')
  const [Usedata, Setdata] = React.useState([])

  function inputValue(inputValue){
    setuserInp(inputValue)
  }

  var currentdate = new Date();
var datetime = "Date - " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + '  Time - '
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();

console.log( datetime);

  function btnPress(){
    Setdata((currentUser)=>[...currentUser, {text: userInp, key: datetime}])
    setuserInp('')
  }
  // console.log(Usedata);

  return(
   <SafeAreaView style={Styles.cont} >
    <Nav/>
   <FlatList data={Usedata} renderItem={
    (itemsdata)=>{
      return(
        <TodoCard data={itemsdata.item.text}/>
      )
    } } 
    style={Styles.card_cont}/>
   
    <View style={Styles.inp_btn_cont}>
      <TextInput value={userInp} onChangeText={inputValue} placeholder='Add Todo Here' style={Styles.inp_txt}/>
      <Button onPress={btnPress} title='Add Todo' style={Styles.add_btn}/>
   </View>
   </SafeAreaView>
  )
};


export default App;
