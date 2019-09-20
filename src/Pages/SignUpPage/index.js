import React from 'react';
import {useState, useEffect, Text, View , Dimensions} from 'react-native';
import { Container, InputContainer , Button, Input,
  FieldContainer, TextContainer, StyledText, ButtonText} from './styles'
import Api from '../../Api'
import api from '../../Api';

const {width : WIDTH, height: HEIGHT} = Dimensions.get('window');



export default function SignUpPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickName, setNickName] = useState('');
  const [isNewUser, setIsNewUser] = useState(true);

  const handleNameChange = (name) => {
    setUserName(name);
  }
  const handleNickNameChange = (nickName) => {
    setNickName(nickName);
  }
  const handlePasswordChange = (password) => {
    setPassword(password);
  }
  const handlePasswordChange = (password) => {
    setPasswordConfirm(password);
  }

  const getUserData = () => {
    const user = {
      name: userName,
      nickName: nickName,
      password: password
    }
  }

  const verifyPasswords = () => {
    return password===passwordConfirm;
  }

  const postUserData = async () => {
    getUserData();
    api.post("api")
  }

  const updateUserData = async ()  => {
    getUserData()
  }

  const handleSignUpButton = () => {
    if(!verifyPasswords()) {
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
          <Button placeholderTextColor='white'><ButtonText>Cadastrar-se</ButtonText></Button>
        </InputContainer>

      </FieldContainer>
     
    </Container>
  );
}