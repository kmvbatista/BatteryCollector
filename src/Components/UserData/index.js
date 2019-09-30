import React, {useState} from 'react'
import { Container, DataText, DataTitle, OverallDataContainer,
   YearDataContainer, MonthDataContainer, YearDataBox,
    MonthDataBox, HeaderStrap, ContainerAlignCenter } from './styles'
import { Dimensions, View, Text} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { StyledScrollView } from '../../Pages/Statistics/styles';


   const {width : WIDTH, height: HEIGHT} = Dimensions.get('window');

export default function UserData(props) {
  let [weekData, setWeekData] = useState(props.chartsData.weekPoints);
  let [yearData, setYearData] = useState(props.chartsData.yearPoints);
  let [generalData, setGeneralData] = useState(props.generalData);

  weekData = props.chartsData.weekPoints;
  yearData = props.chartsData.yearPoints;
  return(
    <StyledScrollView>
    <View style={{width:WIDTH, height: HEIGHT, justifyContent: "center", alignItems: 'stretch', flex: 0.6}}>
      <HeaderStrap><DataTitle>Esse Mês</DataTitle></HeaderStrap>
      <MonthDataContainer>
        <MonthDataBox>
          <DataTitle>Semana 1</DataTitle>
          <DataText>{weekData[0]} pontos</DataText>
        </MonthDataBox>
        <MonthDataBox>
        <DataTitle>Semana 2</DataTitle>
          <DataText>{weekData[1]} pontos</DataText>
        </MonthDataBox>
        <MonthDataBox>
        <DataTitle>Semana 3</DataTitle>
          <DataText>{weekData[2]} pontos</DataText>
        </MonthDataBox>
        <MonthDataBox>
        <DataTitle>Semana 4</DataTitle>
          <DataText>{weekData[3]} pontos</DataText>
        </MonthDataBox>
      </MonthDataContainer>

        <HeaderStrap><DataTitle>Esse Ano</DataTitle></HeaderStrap>
        <YearDataContainer>
          <View style={{flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
          
            <YearDataBox>
              <DataTitle>Jan</DataTitle>
              <DataText>{yearData[0]} pontos</DataText>
            </YearDataBox>
            <YearDataBox>
              <DataTitle>Fev</DataTitle>
              <DataText>{yearData[1]} pontos</DataText>
            </YearDataBox>
            <YearDataBox>
              <DataTitle>Mar</DataTitle>
              <DataText>{yearData[2]} pontos</DataText>
            </YearDataBox>
            <YearDataBox>
              <DataTitle>Abr</DataTitle>
              <DataText>{yearData[3]} pontos</DataText>
            </YearDataBox>
           </View>
          <View style={{flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>

            <YearDataBox>
              <DataTitle>Mai</DataTitle>
              <DataText>{yearData[4]} pontos</DataText>
            </YearDataBox>

            <YearDataBox>
              <DataTitle>Jun</DataTitle>
              <DataText>{yearData[5]} pontos</DataText>
            </YearDataBox>

            <YearDataBox>
              <DataTitle>Jul</DataTitle>
              <DataText>{yearData[6]} pontos</DataText>
            </YearDataBox>
            <YearDataBox>
              <DataTitle>Ago</DataTitle>
              <DataText>{yearData[7]} pontos</DataText>
            </YearDataBox>
            </View>
            <View style={{flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
            <YearDataBox>
              <DataTitle>Set</DataTitle>
              <DataText>{yearData[8]} pontos</DataText>
            </YearDataBox>
            <YearDataBox>
              <DataTitle>Out</DataTitle>
              <DataText>{yearData[9]} pontos</DataText>
            </YearDataBox>
            <YearDataBox>
              <DataTitle>Nov</DataTitle>
              <DataText>{yearData[10]} pontos</DataText>
            </YearDataBox>
            <YearDataBox>
              <DataTitle>Dez</DataTitle>
              <DataText>{yearData[11]} pontos</DataText>
            </YearDataBox>
            </View>

        </YearDataContainer>

      <HeaderStrap><DataTitle>Dados Gerais</DataTitle></HeaderStrap>
        <OverallDataContainer>
        

        <View style={{flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
          <DataTitle>Mês de maior contribuição: </DataTitle>
          <DataText> {generalData.mostDiscardedMonth}</DataText>
          </View>

          <View style={{flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
          <DataTitle> Material mais descartado: </DataTitle>
          <DataText>{generalData.mostDiscarded}</DataText>
          </View>

          <View style={{flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
          <DataTitle>Local mais frequente: </DataTitle>
          <DataText>{generalData.mostVisited}</DataText>
          </View>

          <View style={{flex: 1, justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}>
          <DataTitle>Total de Pontos: </DataTitle>
          <DataText>{generalData.totalPoints}</DataText>
          </View>
        </OverallDataContainer>
        
    </View>
    </StyledScrollView>
  );
          
}