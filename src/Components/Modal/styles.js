import Modal from 'react-native-modalbox'

import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  flex: 1;
`;

export const ModalStyled = styled.Modal`
  border-radius: 30px;
  width: 80%;
  height: 30%;
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: rgba(21, 219, 10, 1);
  width: 80%;
  border-radius: 5;
  justify-content: center;
  flex: 1;
`;

export const ViewRouteButton = styled.TouchableOpacity`
  background-color: black;
  width: 80%;
  flex: 1;
  border-radius: 5;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  align-self: center;
`;

export const DialogText = styled.Text`
  color: #000;
  font-weight: bold;
  font-family: fantasy;
  font-size: 18px;
`;

export const TitleContainer = styled.View`
  flex: 1.3;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainers = styled.View`
  flex: 0.7;
  justify-content: space-around;
  flex-direction: row;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 47%;
  flex: 1;
  text-align: center;
`;


export const TextButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  text-align: center;

`;
