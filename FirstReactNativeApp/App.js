import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, SafeAreaView, Image, FlatList } from "react-native";
import TodoCard from './src/component/ToDoCard';
import Nav from './src/component/Nav';
import TxtInput from './src/component/Txtnput';
import { Styles } from './src/style/Styles';

const App = () => {

  const [Usedata, Setdata] = React.useState([]);

  var currentdate = new Date();

  var currentdate = new Date();
  var date = "Date -  " + currentdate.getDay() + "/" + currentdate.getMonth() 
  + "/" + currentdate.getFullYear() + " Time " 
  + currentdate.getHours() + ":" 
  + currentdate.getMinutes() + ":" + currentdate.getSeconds();


  function btnPress(userInp) {
    Setdata((currentUser) => [...currentUser, { text: userInp, id: date }])
  }

  function onDelete(id){
    var b= Usedata.filter((itm)=>{
      return itm.id !== id
    })
    Setdata(b)
    console.log(Usedata);
  }

  return (
    <SafeAreaView style={Styles.cont} >
      <Nav />
      <FlatList data={Usedata} renderItem={
        (itemsdata) => {
          return (
            <TodoCard data={itemsdata.item.text} id={itemsdata.item.id} onDelete={onDelete}/>
          )
        }
      }

      keyExtractor={(item, i)=>{
         return(
          item.id
         )
      }}
        style={Styles.card_cont} />
      <TxtInput btnPress={btnPress} />
    </SafeAreaView>
  )
};


export default App;
