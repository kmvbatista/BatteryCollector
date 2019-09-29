import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import{Top, Title, HeaderContainer } from './styles'
import logo from '../../../images/recipiente-de-lixo-para-reciclagem.png'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DiscardingHeader(props) {
    return (
      <HeaderContainer>
        <Top>
        <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo}/>
            <Title >Selecione o Material</Title>
            <Title> e a Quantidade :)</Title>
        </View>
          
        </Top>
        <Icon name="keyboard-arrow-down" size={20} color="#fff"/>
      </HeaderContainer>
    )
}
const styles = StyleSheet.create({
  
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    alignItems:'center',
    flexDirection: "column"
  },
  logoText : {
    color: 'white',
    fontSize: 27,
    fontWeight:'500',
    marginBottom: 150
  }
})