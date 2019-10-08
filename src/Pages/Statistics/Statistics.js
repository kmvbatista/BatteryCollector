import LineChart from '../../Components/Charts/LineChart/index'
import BarChart from '../../Components/Charts/BarChart/index'
import PieChart from '../../Components/Charts/PieChart/index'
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useState, useEffect} from 'react';
import {Container, LineContainer, BarContainer, ContributionContainer, Title,
     Header, StyledScrollView} from './styles';
import UserData from '../../Components/UserData/index'
import {StyleSheet, Dimensions, BackHandler} from 'react-native'
const {width : WIDTH, height: HEIGHT} = Dimensions.get('window');
import AnimatedLoader from 'react-native-animated-loader'
import getChartStatistics from '../../Services/GetChartsStatistics'




export default function Statistics({navigation}) {
    const [isLoading, setisLoading] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    let [chartsData, setChartsData] = useState();
    let [generalUserData, setGeneralUserData] = useState();
    let [materialsDiscarded, setMaterialsDiscarded]= useState();

    const getData = () => {
        return getChartStatistics(navigation.state.params.id).then( (dataDragged) => {
            if(dataDragged) {
                setChartsData(dataDragged.alldiscards);
                setGeneralUserData(dataDragged.generalData);
                setMaterialsDiscarded(dataDragged.materialsDiscarded);
            }
            else{
                setVoiddata();
            }
        })
    }

    const callApi = () => {
        getData().then( () => {
            setisLoading(false);
        });
    }
    useEffect( () => {
        BackHandler.addEventListener(
          'hardwareBackPress',
          handlebackPress
        );
        return () =>
          BackHandler.removeEventListener('hardwareBackPress', handlebackPress);
      })  

    function handlebackPress(){
        return navigation.navigate('Main', navigation.state.params);
      }
    return (
        
        <Container>
        {isLoading &&(<AnimatedLoader  visible={true}  overlayColor='rgba(21, 219, 10, 1)'
        speed={1} animationType={'fade'} source={require("../../Components/Animations/graficos.json")}></AnimatedLoader>)}
        {isLoading && callApi()}
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
                        <LineChart data={chartsData.yearPoints} ></LineChart>
                    </LineContainer>
                    <BarContainer style={{width: WIDTH}}> 
                        <BarChart data = {chartsData.weekPoints}>
                        </BarChart>
                    </BarContainer>
                    <ContributionContainer style={{width: WIDTH}}>
                        <PieChart data={materialsDiscarded}>
                        </PieChart>
                    </ContributionContainer>
                </StyledScrollView>
                <UserData 
                    generalData = {generalUserData}
                    chartsData = {chartsData}
                ></UserData>
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