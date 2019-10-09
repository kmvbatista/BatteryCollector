import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, 
  Image, Dimensions, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Api  from '../../Services/Api'
import logo from '../../../images/terra-entre-as-maos.png';
import AnimatedLoader from 'react-native-animated-loader'
import { Container, StyledInput, Button, ButtonText, Input, InputContainer,
  HeaderContainer, BodyContainer, ButtonContainer, InputsContainer } from './styles';
import Header from '../../Components/Header'

const {width : WIDTH} = Dimensions.get('window');

export default function Login( { navigation } ) {

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  let [userLogged, setuserLogged] = useState('');
  let [tokenActive, setToken] = useState('');

  const getUserLoggedStorage = async () => {
    let userFound= await AsyncStorage.getItem('@BatteryCollector:user');
     if(userFound) {
      userFound = JSON.parse(userFound);
      setuserLogged(userFound);
      return userFound;
     }
  }

  const getTokenStorage = async () => {
    const tokenFound = await AsyncStorage.getItem('@BatteryCollector:token');
    if(tokenFound) {
      setToken(tokenFound);
      return tokenFound;
    }
  }
  
  const MultisetStorage = (logIn, token) => {
    return AsyncStorage.multiSet([
      ['@BatteryCollector:token', token],
      ['@BatteryCollector:user', JSON.stringify(logIn)]
    ]).then( () => {
      
    })
  }

  const verifyUserLogged = () => {
      return getUserLoggedStorage().then( userLogged => {
        return getTokenStorage().then(tokenActive => {
          if(userLogged && tokenActive) {
          navigation.navigate('Main', userLogged);
          }
        })
    })
  }

  const signIn = () => {
    return Api().then( api => {
      return api.post('/api/login', {
        email:user,
        password:password
      }).then( ( {data}) => {
        return MultisetStorage( data.userToSend, data.token.value.token).then( () => {
          navigation.navigate('Main', data.userToSend);
          Alert.alert(`Bem vindo, ${data.userToSend.name}`);
        })
      }).catch( (error) => {
        console.log(error.message);
        alert('Senha ou email inválidos');
      })
    })
  }
  
  const toggleLoader = () => {
    this.setTimeout(() => {
      verifyUserLogged().then( () => {
        setIsLoading(false);
      })
    }, 2500);
  }

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  }

  return (
    <Container>
      {isLoading &&(
        <AnimatedLoader  visible={true} animationType={'slide'} overlayColor='rgba(21, 219, 10, 1)'
          speed={1}  source={require("../../Components/Animations/lineDel.json")}></AnimatedLoader>)}
      {toggleLoader()}
      { !isLoading &&(
      <>  
              <KeyboardAvoidingView>
              <HeaderContainer>
                <Header LoginText={`Turn It Greener`} logo={logo}></Header>
              </HeaderContainer>
              <BodyContainer>
              <InputsContainer>
                <InputContainer>
                  <Input
                    autoCapitalize= 'none'
                    autoCorrect= {false}
                    placeholder={'Email'}
                    placeholderTextColor={'rgba(0,0,0, 0.7)'}
                    underlineColorAndroid ='transparent'
                    value= {user}
                    onChangeText= {setUser}
                    >
                  </Input>
                  </InputContainer>

                <InputContainer>

                  <Input
                    autoCapitalize= 'none'
                    placeholder={'Senha'}
                    secureTextEntry={true}
                    placeholderTextColor={'rgba(0,0,0, 0.7)'}
                    underlineColorAndroid ='transparent'
                    value= {password}
                    onChangeText= {setPassword}
                    autoCorrect={false}
                  >
                  </Input>
                </InputContainer>
              </InputsContainer>
                <ButtonContainer>
                    <Button onPress={signIn} placeholderTextColor='white'>
                      <ButtonText>Entrar</ButtonText>
                    </Button>
                    <Button onPress={handleSignUp} placeholderTextColor='#fff'>
                      <ButtonText>Cadastrar-se</ButtonText>
                    </Button>
                </ButtonContainer>
              </BodyContainer>
              </KeyboardAvoidingView>
      </>)}
    </Container>
  );
}
