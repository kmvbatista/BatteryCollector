import React, {useState, useEffect} from 'react';
import { Text, View , Dimensions, BackHandler} from 'react-native';
import { Container, ButtonText, StyledText} from './styles'
import api from '../../Services/Api';
import AsyncStorage from '@react-native-community/async-storage';
const {width : WIDTH, height: HEIGHT} = Dimensions.get('window');
import SignUpComponent from '../../Components/SignUpSignIn/index';



export default function SignUpPage( { navigation } ) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setemail] = useState('');

  this._didFocusSubscription = navigation.addListener(  
    'didFocus',
    payload =>
      BackHandler.addEventListener(
        'hardwareBackPress',
        handlebackPress
      )
);

function handlebackPress(){
    return navigation.navigate('Login');
  }

  const handleNameChange = (name) => {
    setUserName(name);
  }
  const handleEmailChange = (email) => {
    setemail(email);
  }
  const handlePasswordChange = (password) => {
    setPassword(password);
  }
  const handlePasswordConfirmChange = (password) => {
    setPasswordConfirm(password);
  }

  const getUserData = () => {
    const user = {
      name: userName,
      email: email,
      password: password,
    }
    return user;
  }

  const verifyPasswords = () => {
    return password.length > 0 && password===passwordConfirm;
  }

  const postUserData = async () => {
    
    const response = await api.post("/api/users", getUserData());
    if(response.status >= 400) {
      alert('Ocorreu um erro. Tente mais tarde');
    }
    else {
      navigation.navigate('Main');
      console.log(response);
    }
  }

  const updateUserData = async ()  => {
    const { id } = Json.Parse(await AsyncStorage.getItem('@BatteryCollector:user'));
    const userToSend = getUserData();
    userToSend.id = id;
    api.put("api/users", userToSend);
  }

  const handleSignUpButton = () => {
    if(!verifyPasswords()) {
      alert('As senhas não batem')
      return;
    }
    try{
      postUserData();
    }
    catch {
      alert('Tente mais tarde!');
    }
  }

  return (
    <Container>
      <SignUpComponent
        handleSignUpButton = {handleSignUpButton}
        handlePasswordChange = {handlePasswordChange}
        handlePasswordConfirmChange= {handlePasswordConfirmChange}
        ButtonText = {<ButtonText>Cadastrar-se</ButtonText>}
        handleEmailChange = {handleEmailChange}
        handleNameChange = {handleNameChange}
        Title = {<StyledText>Contribua com a Natureza ;)</StyledText>}
      >
      </SignUpComponent>
    </Container>
  );
}