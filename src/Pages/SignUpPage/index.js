import React, {useState, useEffect} from 'react';
import { Text, View , Dimensions, BackHandler} from 'react-native';
import { Container, InputContainer , Button, Input,
  FieldContainer, TextContainer, StyledText, ButtonText} from './styles'
import api from '../../Api';
import AsyncStorage from '@react-native-community/async-storage';
const {width : WIDTH, height: HEIGHT} = Dimensions.get('window');



export default function SignUpPage( { navigation } ) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickName, setNickName] = useState('');
  const [isNewUser, setisNewUser] = useState(true);

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
    userToSend.id = id;
    api.put("api/users", userToSend);
  }

  const handleSignUpButton = () => {
    if(!verifyPasswords()) {
      alert('As senhas não batem')
      return;
    }
    if(isNewUser) {
      postUserData();
    }
    else{
      updateUserData();
    }
  }

  return (
    <Container>
      <TextContainer>
        <StyledText>Seja um colaborador :)</StyledText>
      </TextContainer>
      <FieldContainer style={{marginTop: HEIGHT/80}}>
        <InputContainer>
        <Input 
          placeholder={'Nome'}
          secureTextEntry={false}
          placeholderTextColor={'rgba(0,0,0, 0.7)'}
          underlineColorAndroid ='transparent'
          autoCorrect={false}
          onChangeText={(el) => handleNameChange(el)}
        ></Input>
        </InputContainer>

        <InputContainer>
          <Input placeholder={'Apelido'}
            secureTextEntry={false}
            placeholderTextColor={'rgba(0,0,0, 0.7)'}
            underlineColorAndroid ='transparent'
            autoCorrect={false}
            onChangeText={(el) => handleNickNameChange(el)}
          ></Input>
        </InputContainer>

        <InputContainer>
        <Input 
          placeholder={'Senha'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(0,0,0, 0.7)'}
          underlineColorAndroid ='transparent'
          autoCorrect={false}
          onChangeText={(el) => handlePasswordChange(el)}
        ></Input>
        </InputContainer>
        
        <InputContainer>
        <Input 
          placeholder={'Confirmar Senha'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(0,0,0, 0.7)'}
          underlineColorAndroid ='transparent'
          autoCorrect={false}
          onChangeText={(el) => handlePasswordConfirmChange(el)}
        ></Input>
        </InputContainer>
        <InputContainer>
          <Button onPress={handleSignUpButton} placeholderTextColor='white'><ButtonText>Cadastrar-se</ButtonText></Button>
        </InputContainer>
      </FieldContainer>
    </Container>
  );
}