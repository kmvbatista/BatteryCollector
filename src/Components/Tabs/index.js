import React from 'react'
import {Container, TabsContainer, TabItem, TabText} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation'

class Tabs extends React.Component {

  handleSair() {
    return this.props.navigation.goBack(null)
  }

  render() {
    return (
      <Container>
        <TabsContainer>
          

          <TouchableHighlight onPress={() => { 
            this.props.navigation.navigate('Map');
          }} underlayColor= {"rgba(255, 255, 255, 0.6)"}>
            <TabItem>
              <Icon name="delete" size={35} color="#fff" ></Icon>
              <TabText>Descartar</TabText>
            </TabItem>
            </TouchableHighlight>

          <TouchableHighlight onPress={() => { 
            this.props.navigation.navigate('Statistics');
            }} underlayColor= {"rgba(255, 255, 255, 0.6)"}>
          <TabItem>
            <Icon name="insert-chart" size={35} color="#fff" ></Icon>
            <TabText>Estatísticas</TabText>
          </TabItem>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => { 
              this.props.navigation.navigate('Ranking');
            }} underlayColor= {"rgba(255, 255, 255, 0.6)"}>
            <TabItem>
              <Icon name="trending-up" size={35} color="#fff" ></Icon>
              <TabText>Ranking</TabText>
            </TabItem>
          </TouchableHighlight>

          <TouchableHighlight onPress={ () => {
            this.props.navigation.navigate('UpdateUserData');
          }} 
          underlayColor= {"rgba(255, 255, 255, 0.6)"}>
            <TabItem>
              <Icon name="person" size={35} color="#fff" ></Icon>
              <TabText>Minha Conta</TabText>
            </TabItem>
          </TouchableHighlight>

          <TouchableHighlight onPress={ () => {
            this.props.navigation.navigate('Indicate');
          }} 
          underlayColor= {"rgba(255, 255, 255, 0.6)"}>
            <TabItem>
              <Icon name="record-voice-over" size={35} color="#fff" ></Icon>
              <TabText>Indicar feature</TabText>
            </TabItem>
          </TouchableHighlight>

          <TabItem>
            <Icon name="info" size={35} color="#fff" ></Icon>
            <TabText>Informações</TabText>
          </TabItem>
          <TouchableHighlight onPress={() => { 
            this.handleSair();
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
}
export default withNavigation(Tabs);
