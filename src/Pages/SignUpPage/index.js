import React from 'react';
import {useState, useEffect, Text, View , Dimensions} from 'react-native';
import { Container, InputContainer , Button, Input, FieldContainer} from './styles'

const {width : WIDTH, height: HEIGHT} = Dimensions.get('window');


export default function SignUpPage() {
  return (
    <Container>
      <FieldContainer style={{marginTop: HEIGHT/8}}>
        <InputContainer>
        <Input 
          placeholder={'Nome'}
          secureTextEntry={false}
          placeholderTextColor={'rgba(0,0,0, 0.7)'}
          underlineColorAndroid ='transparent'
          autoCorrect={false}
        ></Input>
        </InputContainer>

        <InputContainer>
          <Input placeholder={'Apelido'}
            secureTextEntry={false}
            placeholderTextColor={'rgba(0,0,0, 0.7)'}
            underlineColorAndroid ='transparent'
            autoCorrect={false}
          ></Input>
        </InputContainer>

        <InputContainer>
        <Input 
          placeholder={'Senha'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(0,0,0, 0.7)'}
          underlineColorAndroid ='transparent'
          autoCorrect={false}
        ></Input>
        </InputContainer>
        
        <InputContainer>
        <Input 
          placeholder={'Confirmar Senha'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(0,0,0, 0.7)'}
          underlineColorAndroid ='transparent'
          autoCorrect={false}
        ></Input>
        </InputContainer>

        <InputContainer>
          <Button placeholderTextColor='#fff'>
            <Text >Entrar</Text>
          </Button>
        </InputContainer>
      </FieldContainer>
     
    </Container>
  );
}