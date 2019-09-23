import React, {useState, useEffect} from 'react';
import { Dimensions, BackHandler} from 'react-native';
import { Container, ButtonText, StyledText} from './styles'
import api from '../../Api';
import AsyncStorage from '@react-native-community/async-storage';
const {width : WIDTH, height: HEIGHT} = Dimensions.get('window');
import SignUpComponent from '../../Components/SignUpSignIn/index';



export default function SignUpPage( { navigation } ) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickName, setNickName] = useState('');

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
  const handleNickNameChange = (nickName) => {
    setNickName(nickName);
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
      nickName: nickName,
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
      console.log(`erro de requisição ${response.status}`)
    }
    else {
      navigation.navigate('Main');
      console.log(response);
    }
  }

  const updateUserData = async ()  => {
    const { id } = Json.Parse(await AsyncStorage.getItem('@BatteryCollector:user'));
    const userToSend = getUserData();
    const response = await api.put("/api/users", getUserData());
    if(response.status >= 400) {
      console.log(`erro de requisição ${response.status}`)
    }
    else {
      navigation.navigate('Main');
      console.log(response);
    }
  }
  

  const handleSignUpButton = () => {
    if(!verifyPasswords()) {
      alert('As senhas não batem')
      return;
    }
    try{
      updateUserData();
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
        handleNickNameChange = {handleNickNameChange}
        handleNameChange = {handleNameChange}
        Title = {<StyledText>Contribua com a Natureza ;)</StyledText>}
      >
      </SignUpComponent>
    </Container>
  );
}