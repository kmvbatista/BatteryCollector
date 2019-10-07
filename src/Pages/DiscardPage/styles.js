import styled from 'styled-components/native';

export const Container = styled.View`

  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  margin-left: 8px;
  margin-top: 5px;
  font-family: fantasy;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  padding: 40px 0 30px;
`;

export const Top = styled.View`
margin-top:-35px;
  flex-direction: row;
  align-items: center;
`;

export const TextInputStyled = styled.TextInput`
  height: 40px;
  margin: 0px 0px 0px 0px;
  border-radius: 15px;
  padding: 0px 20px 0px 20px;
  width: 50%;
  margin-bottom: 20px;
`;

export const ContentsContainer = styled.View`
  margin-top: 80px;
  align-items: center;
  justify-content: center;
  width: 100%;
  align-content: space-between;
`;

export const ButtonStyled = styled.TouchableOpacity`
background-Color: #000;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 70%;
  border-radius: 15px;
`;

export const TextStyled = styled.Text`
  color: #fff;
`;

export const UserDataContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const AnimationContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 2;
`;

export const CongratsTextContainer = styled.View`
  flex: 0.5;
  align-items: center;
  justify-content: center;
`;

export const CongratsText = styled.Text`
  font-family: cursive;
  font-weight: bold;
  font-size: 25px;
  color: #fff;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 0.5;
`;
