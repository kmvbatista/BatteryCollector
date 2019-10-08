import React, {useState, useEffect} from 'react';
import { Dimensions, BackHandler} from 'react-native';
import { Container, ButtonText, StyledText} from './styles'
import Api from '../../Services/Api';
import AsyncStorage from '@react-native-community/async-storage';
const {width : WIDTH, height: HEIGHT} = Dimensions.get('window');
import SignUpComponent from '../../Components/SignUpSignIn/index';



export default function UpdateUserData( { navigation } ) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setemail] = useState('');
  let [userLogged, setUserLogged] = useState();

  useEffect( () => {
    BackHandler.addEventListener(
      'hardwareBackPress',
      handlebackPress
    );
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', handlebackPress);
  })  

  const handleEmailChange = (email) => {
    setemail(email);
  }

function handlebackPress(){
    return navigation.navigate('Login');
  }

  const handleNameChange = (name) => {
    setUserName(name);
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

  const updateUserData = async ()  => {
      const { id } = JSON.parse(await AsyncStorage.getItem('@BatteryCollector:user'));
      const userToSend = getUserData();
      userToSend.id = id;
      return Api().then( api => {
        return api.put("/api/users", userToSend).then( (response) => {
            AsyncStorage.setItem('@BatteryCollector:user', JSON.stringify(userToSend)).then(() =>{
              navigation.navigate('Main', userToSend);
              alert('Atualizado com sucesso');
            })
        })
        .catch( (error) => { 
          alert('Houve um erro na requisição');
        }) 
      });
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
        ButtonText = {<ButtonText>Confirmar</ButtonText>}
        handleNameChange = {handleNameChange}
        handleEmailChange = {handleEmailChange}
        Title = {<StyledText>Deseja atualizar seus dados? </StyledText>}
      >
      </SignUpComponent>
    </Container>
  );
}