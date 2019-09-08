import React from 'react'
import {Container, TabsContainer, TabItem, TabText} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation'
const handlepress= ()=> {
  alert('Voce clicou');
}
toMap = () => {
  this.PaymentResponse.navigation.navigate('Map');
} 

class Tabs extends React.Component {
  render() {
    return (
      <Container>
        <TabsContainer>
          <TouchableHighlight onPress={ () => { r
            this.props.navigation.navigate('Map');
          }} 
          underlayColor= {"rgba(255, 255, 255, 0.6)"}>
            <TabItem>
              <Icon name="person" size={35} color="#fff" ></Icon>
              <TabText>Minha Conta</TabText>
            </TabItem>
            </TouchableHighlight>

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
            <Icon name="trending-up" size={35} color="#fff" ></Icon>
            <TabText>Estatísticas</TabText>
          </TabItem>
          </TouchableHighlight>

          <TabItem>
            <Icon name="info" size={35} color="#fff" ></Icon>
            <TabText>Informações</TabText>
          </TabItem>
          <TabItem>
            <Icon name="keyboard-tab" size={35} color="#fff" ></Icon>
            <TabText>Sair</TabText>
          </TabItem>
        </TabsContainer>
      </Container>
    );
  }
}
export default withNavigation(Tabs);
