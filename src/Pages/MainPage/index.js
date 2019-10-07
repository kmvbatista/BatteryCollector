import React, {useState} from 'react';
import { BackHandler } from 'react-native';
import {Container1, TextHint, TextHintContainer} from './styles';
import Header from '../../Components/Header/index'
import Tabs from '../../Components/Tabs/index'
import Icon from 'react-native-vector-icons/MaterialIcons';
import headerLogo from '../../../images/recicl-o-simbolo-de-tres-folhas.png'
import Accordion from  '../../Components/Accordion/index'
import GetAsks from '../../Services/GetAsks';
import AnimatedLoader from 'react-native-animated-loader'

export default function Main( { navigation } ) {

  const [firstRequest, setFirstRequest] = useState(true);
  const [isLoading, setIsLoading] = useState(true); 
  const [asks, setAsks] = useState();

  const getData = () => {
    return GetAsks().then( asksAndQuestions => {
      setAsks(asksAndQuestions);
    })
    .catch( () => {
      alert('Tente Novamente');
      navigation.navigate('Login');
    });
  }

  const callApi = () => {
    setFirstRequest(false);
    getData().then( () => {
      setIsLoading(false);
    })
  }

  return( 
    <Container1>
      {isLoading &&(<AnimatedLoader  visible={true}  overlayColor='rgba(21, 219, 10, 1)'
        speed={1} animationType={'fade'} source={require("../../Components/Animations/aviao.json")}></AnimatedLoader>)}
        {isLoading && firstRequest &&callApi()}
        {!isLoading && (
          <>  
            <Header Text1={`Seja bem vindo, `} Text2={navigation.state.params.name}
             logo={headerLogo}></Header>
            <TextHintContainer>
              <TextHint>Gire para opções </TextHint>
              <Icon name="keyboard-arrow-right" size={20} color="#fff"/>
            </TextHintContainer>
            <Tabs user={navigation.state.params.name}></Tabs>
            <Accordion asks={asks}></Accordion>
          </>
        )}
    </Container1>
  );
}
