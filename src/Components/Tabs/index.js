import React from 'react'
import {Container, TabsContainer, TabItem, TabText} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation'

function Tabs(props) {

  const handleSair = () => {
    return props.navigation.navigate('Login')
  }

    return (
      <Container>
        <TabsContainer>
          

          <TouchableHighlight onPress={() => { 
            props.navigation.navigate('Map', props.user);
          }} underlayColor= {"rgba(255, 255, 255, 0.6)"}>
            <TabItem>
              <Icon name="delete" size={35} color="#fff" ></Icon>
              <TabText>Descartar</TabText>
            </TabItem>
            </TouchableHighlight>

          <TouchableHighlight onPress={() => { 
            props.navigation.navigate('Statistics', props.user);
            }} underlayColor= {"rgba(255, 255, 255, 0.6)"}>
          <TabItem>
            <Icon name="insert-chart" size={35} color="#fff" ></Icon>
            <TabText>Estatísticas</TabText>
          </TabItem>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => { 
              props.navigation.navigate('Ranking', props.user);
            }} underlayColor= {"rgba(255, 255, 255, 0.6)"}>
            <TabItem>
              <Icon name="trending-up" size={35} color="#fff" ></Icon>
              <TabText>Ranking</TabText>
            </TabItem>
          </TouchableHighlight>

          <TouchableHighlight onPress={ () => {
            props.navigation.navigate('UpdateUserData', props.user);
          }} 
          underlayColor= {"rgba(255, 255, 255, 0.6)"}>
            <TabItem>
              <Icon name="person" size={35} color="#fff" ></Icon>
              <TabText>Minha Conta</TabText>
            </TabItem>
          </TouchableHighlight>

          <TouchableHighlight onPress={ () => {
            props.navigation.navigate('Indicate', props.user);
          }} 
          underlayColor= {"rgba(255, 255, 255, 0.6)"}>
            <TabItem>
              <Icon name="record-voice-over" size={35} color="#fff" ></Icon>
              <TabText>Indicar feature</TabText>
            </TabItem>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => { 
            handleSair();
            }} underlayColor= {"rgba(255, 255, 255, 0.6)"}>

              <TabItem>
                <Icon name="keyboard-tab" size={35} color="#fff" ></Icon>
                <TabText>Sair</TabText>
              </TabItem>
          </TouchableHighlight>

        </TabsContainer>
      </Container>
    );
}
export default withNavigation(Tabs);
