import React from 'react';
import { Input, InputContainer } from '../styles'

export default function SignUpPage() {
  return (
    <InputContainer>
      <Input 
        secureTextEntry={false}
        placeholderTextColor={'rgba(0,0,0, 0.7)'}
        underlineColorAndroid ='transparent'
        autoCorrect={false}
      ></Input>
      </InputContainer>
  );