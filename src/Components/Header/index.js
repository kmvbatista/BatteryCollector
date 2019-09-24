import React from 'react'
import { Text, View } from 'react-native'
import{ Container, Top, Title, Logo} from './styles'
import logo from '../../../images/logo80.png'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header(props) {
    return (
      <Container>
        <Top>
          <Logo source={logo}></Logo>
          <Title >{props.Text}</Title>
        </Top>
        <Icon name="keyboard-arrow-down" size={20} color="#fff"/>
      </Container>
    )
}
