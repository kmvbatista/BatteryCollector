import React from 'react';
import { Dimensions } from 'react-native'
import { Container, InputContainer , Button, Input,
  FieldContainer, TextContainer, StyledText,} from './styles'
const {width : WIDTH, height: HEIGHT} = Dimensions.get('window');


export default function SignUpSignIn(props) {
  return (
    <Container>
      <TextContainer>
        <StyledText>{props.Title}</StyledText>
      </TextContainer>
      <FieldContainer style={{marginTop: HEIGHT/80}}>
        <InputContainer>
        <Input 
          placeholder={'Nome'}
          secureTextEntry={false}
          placeholderTextColor={'rgba(0,0,0, 0.7)'}
          underlineColorAndroid ='transparent'
          autoCorrect={false}
          onChangeText={(el) => props.handleNameChange(el)}
        ></Input>
        </InputContainer>

        <InputContainer>
          <Input placeholder={'Apelido'}
            secureTextEntry={false}
            placeholderTextColor={'rgba(0,0,0, 0.7)'}
            underlineColorAndroid ='transparent'
            autoCorrect={false}
            onChangeText={(el) => props.handleNickNameChange(el)}
          ></Input>
        </InputContainer>

        <InputContainer>
        <Input 
          placeholder={'Senha'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(0,0,0, 0.7)'}
          underlineColorAndroid ='transparent'
          autoCorrect={false}
          onChangeText={(el) => props.handlePasswordChange(el)}
        ></Input>
        </InputContainer>
        
        <InputContainer>
        <Input 
          placeholder={'Confirmar Senha'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(0,0,0, 0.7)'}
          underlineColorAndroid ='transparent'
          autoCorrect={false}
          onChangeText={(el) => props.handlePasswordConfirmChange(el)}
        ></Input>
        </InputContainer>
        <InputContainer>
          <Button onPress={props.handleSignUpButton} placeholderTextColor='white'>{props.ButtonText}</Button>
        </InputContainer>
      </FieldContainer>
    </Container>
  );
}
