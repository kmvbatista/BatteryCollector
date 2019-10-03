import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import{ Container, Top, Title, Logo} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header(props) {
    return (
      <Container>
        <Top>
        <View style={styles.logoContainer}>
                    <Image source={props.logo} style={styles.logo}/>
                    <Title>{props.Text1}</Title>
                    <Title>{props.Text2}</Title>
          </View>
          
        </Top>
        <Icon name="keyboard-arrow-down" size={20} color="#fff"/>
      </Container>
    )
}
const styles = StyleSheet.create({
  
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    alignItems:'center'
  },
  logoText : {
    color: 'white',
    fontSize: 27,
    fontWeight:'500',
    marginBottom: 150
  }
})