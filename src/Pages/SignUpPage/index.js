import React from 'react';
import {useState, useEffect } from 'react-native';
import { Container, InputContainer } from './styles'
import Input from './InputComponent/index'

export default function SignUpPage() {
  return (
    <Container>
      <Input placeholder={'Nome'}
      ></Input>
      
      <Input placeholder={'Apelido'}
      ></Input>

      <Input 
        placeholder={'Senha'}
        secureTextEntry={true}
      ></Input>
      <Input 
        placeholder={'Confirmar Senha'}
        secureTextEntry={true}
      ></Input>
      <InputContainer>
        <TouchableOpacity placeholderTextColor='white'>
          <Text >Entrar</Text>
        </TouchableOpacity>
      </InputContainer>

     
    </Container>
  );
}