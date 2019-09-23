import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(21, 219, 10, 1);
`;

export const FieldContainer = styled.View`
  justify-content: center;
  flex: 1;
`;


export const InputContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 0.7;
`;

export const Button = styled.TouchableOpacity`
  background-color: rgba(0,0,0,0.95);
    width: 90%;
    height: 50;
    border-radius: 40;
    font-size: 30;
    padding-left:100;
    padding-right:100;
    margin-bottom:70;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    color: #fff;

    margin:  auto;
`;


export const Input = styled.TextInput`
      border-color: rgba(0,0,0,1);
      background-color: rgba(255,255,255,0.7);
      color: rgba(0,0,0,1);
      font-size: 16;
      justify-content: center;
      text-align: center;
      width: 80%;
      border-radius: 40;

`;

export const StyledText = styled.Text`
  color: #fff;
  font-family: cursive;
  font-size: 30px;
  font-weight: bold;
  align-self: center;
`;

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 20;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`;
