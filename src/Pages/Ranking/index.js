import React, {useState, useEffect} from 'react';
import { Container, HeaderContainer, TableContainer } from './styles'
import Api from '../../Services/Api'
import Table from '../../Components/Table/index'
import getRankingData from '../../Services/GetRankingData' 
import AnimatedLoader from 'react-native-animated-loader'
import { BackHandler } from 'react-native';
import logo from '../../../images/ranking.png'
import RankingHeader from '../../Components/Header'


export default function Ranking({navigation}) {
  let [user, setUser] = useState();
  let [tableData, setTableData]= useState();
  let [isLoading, setIsLoading]= useState(true);

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

  const getData = () => {
    return getRankingData().then( (dataDragged) => {
        setTableData(dataDragged);
    });
  }

  const callApi = () => {
    getData().then( () => {
      setIsLoading(false);
    });
  }

  return (
    <Container>
      {isLoading &&(<AnimatedLoader  visible={true}  overlayColor='rgba(21, 219, 10, 1)'
      speed={1} animationType={'fade'} source={require("../../Components/Animations/whiteboard.json")}></AnimatedLoader>)}
      {isLoading && callApi()} 
      {!isLoading && (
        <RankingHeader Text1={'Olhe quem está no topo'} logo = {logo}></RankingHeader> )}
      {!isLoading &&(
        <TableContainer>
        <Table dataComming={tableData}></Table>
        </TableContainer>
      )}
    </Container>
  );
}