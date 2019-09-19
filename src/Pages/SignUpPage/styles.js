import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(21, 219, 10, 1);
`;

export const FieldContainer = styled.View`
  flex: 1;
  justify-content: center;

`;


export const InputContainer = styled.View`
  flex: 0.7;
  text-align: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: rgba(0,0,0,0.95);
    width: 80%;
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
`;


export const Input = styled.TextInput`
      border-radius: 54;
      border-color: rgba(0,0,0,1);
      background-color: rgba(255,255,255,0.7);
      color: rgba(0,0,0,1);
      font-size: 16;
      justify-content: center;
      align-items: center;
`;
