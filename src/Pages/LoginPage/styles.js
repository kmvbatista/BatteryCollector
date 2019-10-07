import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

  export const InputContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  background-color: rgba(0,0,0,0.95);
    height: 50;
    border-radius: 40;
    font-size: 30;
    justify-content: center;
    color: #fff;
    align-items: center;
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
export const ButtonText = styled.Text`
    color: #fff;
    font-size: 20;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`;

export const InputsContainer = styled.View`
  flex: 1;
`;



export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: space-around;

`;

export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 0.8;
`;

export const BodyContainer = styled.View`
  flex: 1.2;
  justify-content: center;
`;

