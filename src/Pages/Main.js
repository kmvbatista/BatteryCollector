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
        {/* <Container>
          <TabsContainer>
            <TouchableHighlight onPress={ toMap} underlayColor= {"rgba(255, 255, 255, 0.6)"}>
              <TabItem>
                <Icon name="person" size={35} color="#fff" ></Icon>
                <TabText>Minha Conta</TabText>
              </TabItem>
              </TouchableHighlight>

            <TouchableHighlight onPress={toMap} underlayColor= {"rgba(255, 255, 255, 0.6)"}>
              <TabItem>
                <Icon name="delete" size={35} color="#fff" ></Icon>
                <TabText>Descartar</TabText>
              </TabItem>
              </TouchableHighlight>

            <TabItem>
              <Icon name="trending-up" size={35} color="#fff" ></Icon>
              <TabText>Estatísticas</TabText>
            </TabItem>
            <TabItem>
              <Icon name="info" size={35} color="#fff" ></Icon>
              <TabText>Informações</TabText>
            </TabItem>
            <TabItem>
              <Icon name="keyboard-tab" size={35} color="#fff" ></Icon>
              <TabText>Sair</TabText>
            </TabItem>
          </TabsContainer>
      </Container> */}

    </Container1>
  );
}
