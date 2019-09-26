import LineChart from '../../Components/Charts/LineChart/index'
import BarChart from '../../Components/Charts/BarChart/index'
import PieChart from '../../Components/Charts/PieChart/index'
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useState} from 'react';
import {Container, LineContainer, BarContainer, ContributionContainer, Title,
     Header, StyledScrollView} from './styles';
import UserData from '../../Components/UserData/index'
import {View, StyleSheet, Dimensions, BackHandler} from 'react-native'
const {width : WIDTH, height: HEIGHT} = Dimensions.get('window');
import AnimatedLoader from 'react-native-animated-loader'

const getData = () => {
    return ['30', '19', '20', '24', '0', '0', '0', '0', '0', '0', '0', '0']
}


export default function Statistics({navigation}) {
    const [isLoading, setisLoading] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    const data= ['30', '19', '20', '24', '0', '0', '0', '0', '0', '0', '0', '0'];

    const handleScroll = () => {
        setScrolled(!scrolled);
    }

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
        
        <Container>
        {isLoading &&(<AnimatedLoader  visible={true}  overlayColor='rgba(21, 219, 10, 1)'
        speed={1} animationType={'fade'} source={require("../../Components/Animations/rocket.json")}></AnimatedLoader>)}
        {isLoading && toggleLoader()}
        {!isLoading && (
            <>
            <Header>
                <Icon accessible={false} name="keyboard-arrow-left" size={35} color="#fff" ></Icon>
                <Title >
                    Gire para o lado
                </Title>
                {!scrolled &&(<Icon  name="keyboard-arrow-right" size={35} color="#fff" ></Icon>)}
            </Header>

            <StyledScrollView
            contentContainerStyle
                horizontal= {true}
                pagingEnabled= {true}
                showsHorizontalScrollIndicator={false}
                contentInset= {{top: 90, left: -100, bottom: 0, right: 0}
            }>
                <StyledScrollView
                contentContainerStyle
                    horizontal= {false}
                    pagingEnabled= {false}
                    showsVerticalScrollIndicator={false}
                    contentInset= {{top: 90, left: -100, bottom: 0, right: 0}
                }
                >
                    <LineContainer style={{width: WIDTH}}>
                        <LineChart data={data} ></LineChart>
                    </LineContainer>
                    <BarContainer style={{width: WIDTH}}> 
                        <BarChart>
                        </BarChart>
                    </BarContainer>
                    <ContributionContainer style={{width: WIDTH}}>
                        <PieChart>
                        </PieChart>
                    </ContributionContainer>
                </StyledScrollView>
                <UserData></UserData>
            </StyledScrollView>
            
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