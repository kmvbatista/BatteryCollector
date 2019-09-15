import LineChart from '../../Components/Charts/LineChart/index'
import BarChart from '../../Components/Charts/BarChart/index'
import ContributionChart from '../../Components/Charts/ContributionChart/index'
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useState} from 'react';
import {Container, LineContainer, BarContainer, ContributionContainer, Title,
     Header} from './styles';
import UserData from '../../Components/UserData/index'
import {View, StyleSheet, Dimensions, BackHandler, Backbutt} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
const {width : WIDTH, height: HEIGHT} = Dimensions.get('window');
import AnimatedLoader from 'react-native-animated-loader'




export default function Statistics({navigation}) {
    const [isLoading, setisLoading] = useState(true);

    const toggleLoader = () => {
        setTimeout(() => {
            setisLoading(false);
        }, 1500);
    }
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
        {isLoading &&(<AnimatedLoader  visible={true}  overlayColor='rgba(21, 219, 10, 1)'
        speed={1} animationType={'fade'} source={require("../../Components/rocket.json")}></AnimatedLoader>)}
        {isLoading && toggleLoader()}
        {!isLoading && (
            <>
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
            <UserData></UserData>
        </>
        )}
        </Container>
    );
}
const styles = StyleSheet.create({
    Line: {
        width: 360
    }
});