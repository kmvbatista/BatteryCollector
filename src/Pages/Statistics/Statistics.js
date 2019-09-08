import LineChart from '../../Components/Charts/LineChart/index'
import BarChart from '../../Components/Charts/BarChart/index'
import ContributionChart from '../../Components/Charts/ContributionChart/index'
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {Container, LineContainer, BarContainer, ContributionContainer, Title,
     Header, UserData, DataText, DataTitle} from './styles'
import {View, StyleSheet, Dimensions, BackHandler, Backbutt} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { BackButton } from 'react-navigation'
const {width : WIDTH, height: HEIGHT} = Dimensions.get('window');


export default function Statistics({navigation}) {
    this._didFocusSubscription = navigation.addListener(  
        'didFocus',
        payload =>
          BackHandler.addEventListener(
            'hardwareBackPress',
            handlebackPress
          )
    );

    function handlebackPress(){
        return navigation.navigate('Main');
      }
    return (
        <Container style={{height: HEIGHT}}>  
            <Header>
                <Title >
                    Gire para o lado
                </Title>
                <Icon name="keyboard-arrow-right" size={35} color="#fff" ></Icon>
            </Header>
            <ScrollView
                horizontal= {true}
                pagingEnabled= {true}
                showsHorizontalScrollIndicator={false}
                contentInset= {{top: 90, left: -100, bottom: 0, right: 0}}
            >
                <LineContainer style={{width: WIDTH}}>
                    <LineChart ></LineChart>
                </LineContainer>
                <BarContainer style={{width: WIDTH}}> 
                    <BarChart>
                    </BarChart>
                </BarContainer>

                <ContributionContainer style={{width: WIDTH}}>
                    <ContributionChart>

                    </ContributionChart>
                </ContributionContainer>
            </ScrollView>
            <UserData>
                <DataTitle>Mês de maior contribuição: </DataTitle>
                <DataText> Outubro</DataText>
                <DataTitle> Material mais descartado: </DataTitle>
                <DataText>Pilhas</DataText>
                <DataTitle>Local mais frequente: </DataTitle>
                <DataText>Furb</DataText>
            </UserData>
            <BackButton></BackButton>
        </Container>
    );
}
const styles = StyleSheet.create({
    Line: {
        width: 360
    }
});