import React, { Component } from 'react'
import Container1 from '../styles'
import Header from '../Components/Header/index'
import Tabs from '../Tabs/index';
import {Container, TabsContainer, TabItem, TabText} from '../Tabs/styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableHighlight } from 'react-native-gesture-handler';




export default function Main( { navigation } ) {
  const toMap = () => {
    navigation.navigate('Map');
  } ;
  return( 
    <Container1>
      <Header></Header>
        <Tabs></Tabs>
    </Container1>
  );
}
