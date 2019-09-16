import React from 'react'
import { Container, DataText, DataTitle, OverallDataContainer,
   YearDataContainer, MonthDataContainer, YearDataBox, MonthDataBox } from './styles'
import { Dimensions, View} from 'react-native'


   const {width : WIDTH, height: HEIGHT} = Dimensions.get('window');

export default function UserData() {
  const weekData = ['20', '30', '7', '3']
  return(
    <View style={{width:WIDTH, height: HEIGHT, justifyContent: "center", alignItems: 'stretch', flex: 1}}>
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

      <YearDataContainer>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap"}}>
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
          <YearDataBox>
            <DataTitle>Jun</DataTitle>
            <DataText>22 pontos</DataText>
          </YearDataBox>
        </View>

          <View style={{flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row", flexWrap: "wrap"}}>
          <YearDataBox>
            <DataTitle>Jul</DataTitle>
            <DataText>22 pontos</DataText>
          </YearDataBox>
          <YearDataBox>
            <DataTitle>Ago</DataTitle>
            <DataText>22 pontos</DataText>
          </YearDataBox>
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

      <OverallDataContainer>
      <DataTitle>Mês de maior contribuição: </DataTitle>
        <DataText> Outubro</DataText>
        <DataTitle> Material mais descartado: </DataTitle>
        <DataText>Pilhas</DataText>
        <DataTitle>Local mais frequente: </DataTitle>
        <DataText>Furb</DataText>
      </OverallDataContainer>
        
    </View>
  );
          
}