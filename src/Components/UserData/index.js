import React from 'react'
import { Container, DataText, DataTitle, OverallDataContainer,
   YearDataContainer, MonthDataContainer, YearDataBox,
    MonthDataBox, HeaderStrap, ContainerAlignCenter } from './styles'
import { Dimensions, View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { StyledScrollView } from '../../Pages/Statistics/styles';


   const {width : WIDTH, height: HEIGHT} = Dimensions.get('window');

export default function UserData() {
  const weekData = ['20', '30', '7', '3']
  return(
    <StyledScrollView>
    <View style={{width:WIDTH, height: HEIGHT, justifyContent: "center", alignItems: 'stretch', flex: 0.6}}>
      <HeaderStrap><DataTitle>Esse Mês</DataTitle></HeaderStrap>
      <MonthDataContainer>
        <MonthDataBox>
          <DataTitle>Semana 1</DataTitle>
          <DataText>22 pontos</DataText>
        </MonthDataBox>
        <MonthDataBox>
        <DataTitle>Semana 2</DataTitle>
          <DataText>23 pontos</DataText>
        </MonthDataBox>
        <MonthDataBox>
        <DataTitle>Semana 3</DataTitle>
          <DataText>14 pontos</DataText>
        </MonthDataBox>
        <MonthDataBox>
        <DataTitle>Semana 4</DataTitle>
          <DataText>13 pontos</DataText>
        </MonthDataBox>
      </MonthDataContainer>

        <HeaderStrap><DataTitle>Esse Ano</DataTitle></HeaderStrap>
        <YearDataContainer>
          <View style={{flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
          
            <YearDataBox>
              <DataTitle>Jan</DataTitle>
              <DataText>22 pontos</DataText>
            </YearDataBox>
            <YearDataBox>
              <DataTitle>Fev</DataTitle>
              <DataText>22 pontos</DataText>
            </YearDataBox>
            <YearDataBox>
              <DataTitle>Mar</DataTitle>
              <DataText>22 pontos</DataText>
            </YearDataBox>
            <YearDataBox>
              <DataTitle>Abr</DataTitle>
              <DataText>22 pontos</DataText>
            </YearDataBox>
           </View>
          <View style={{flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>

            <YearDataBox>
              <DataTitle>Mai</DataTitle>
              <DataText>22 pontos</DataText>
            </YearDataBox>

            <YearDataBox>
              <DataTitle>Jun</DataTitle>
              <DataText>22 pontos</DataText>
            </YearDataBox>

            <YearDataBox>
              <DataTitle>Jul</DataTitle>
              <DataText>22 pontos</DataText>
            </YearDataBox>
            <YearDataBox>
              <DataTitle>Ago</DataTitle>
              <DataText>22 pontos</DataText>
            </YearDataBox>
            </View>
            <View style={{flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
            <YearDataBox>
              <DataTitle>Set</DataTitle>
              <DataText>22 pontos</DataText>
            </YearDataBox>
            <YearDataBox>
              <DataTitle>Out</DataTitle>
              <DataText>22 pontos</DataText>
            </YearDataBox>
            <YearDataBox>
              <DataTitle>Nov</DataTitle>
              <DataText>22 pontos</DataText>
            </YearDataBox>
            <YearDataBox>
              <DataTitle>Dez</DataTitle>
              <DataText>22 pontos</DataText>
            </YearDataBox>
            </View>

        </YearDataContainer>

      <HeaderStrap><DataTitle>Dados Gerais</DataTitle></HeaderStrap>
        <OverallDataContainer>
        

        <View style={{flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
          <DataTitle>Mês de maior contribuição: </DataTitle>
          <DataText> Outubro</DataText>
          </View>

          <View style={{flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
          <DataTitle> Material mais descartado: </DataTitle>
          <DataText>Pilhas</DataText>
          </View>

          <View style={{flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
          <DataTitle>Local mais frequente: </DataTitle>
          <DataText>Furb</DataText>
          </View>
        </OverallDataContainer>
        
    </View>
    </StyledScrollView>
  );
          
}