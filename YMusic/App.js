
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Musicplayer from './src/components/Musicplayer';
import { Styles } from './src/style/Styles';
import Nav from './src/components/Nav';
import Title from './src/components/Title';

const App =() => {
  return(
    <SafeAreaView style={{flex: 1}}>
       <Title/>
       <Musicplayer/>
       <Nav/>
    </SafeAreaView>
  )
};

export default App;
