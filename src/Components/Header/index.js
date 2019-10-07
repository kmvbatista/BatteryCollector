import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import{ Container, Top, Title, Logo, LoginTitle} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header(props) {
    return (
      <Container>
        <Top>
        <View style={styles.logoContainer}>
            <Image source={props.logo} style={styles.logo}/>
            {!!props.Text1 &&(<Title>{props.Text1}</Title>)}
            {!!props.Text2 &&(<Title>{props.Text2}</Title>)}
            {!!props.LoginText &&(<LoginTitle>{props.LoginText}</LoginTitle>)}
          <Icon name="keyboard-arrow-down" size={20} color="#fff"/>

          </View>
        </Top>
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
})