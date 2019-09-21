import { Container, ContentsContainer, TextInputStyled, ButtonStyled, TextStyled } from './styles'
import { Text, Dimensions, StyleSheet, Alert} from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'
import React, { useState } from 'react';
import DiscardingPage from './DiscardingPage'
import AfterDiscardPage from './AfterDiscardPage'
import api from '../../Api'

const list = [
	{Id: 1, Name: 'Bateria', Value: 'Test1 Value'},
	{Id: 2, Name: 'Óleo', Value: 'Test2 Value'},
	{Id: 3, Name: 'Pilha', Value: 'Test3 Value'},
	{Id: 4, Name: 'Test4 Name', Value: 'Test4 Value'}
]

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default function DiscardPage() {
  const [selectedItem, setSelected] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [congrats, setCongrats] = useState(false);
  const [isDiscarding, setisDiscarding] = useState(true);
  
  const handleDiscardPress = () => {
    try {
      setQuantity(parseInt(quantity));
      if(quantity>0 && selectedItem != null){
        handleDiscardSuccess();
      }
      else {
        handleDiscardFailure();
      }
    }
    catch (err){
      console.log(err);
      handleDiscardFailure();
    }
  }

  const getDiscardData = () => {
    const discardData = {
      selectedItem,
      quantity,
    }
    return discardData;
  }

  const handleDiscardSuccess = async () => {
    const response = await api.post('/api/discards', getDiscardData());
    if(response.status>=400) {
      //erro
    }
    else{
      setCongrats(true);
    }
  }

  const handleDiscardFailure = () => {
    Alert.alert("Por favor, insira valores válidos!")
  }

  const toggleLoader = () => {
    setTimeout(() => {
      setCongrats(false);
      setisDiscarding(false)
    }, 1500);
  }

  return (
    
    <Container>
        {congrats &&(
         <AnimatedLoader  visible={true}  overlayColor='rgba(21, 219, 10, 1)'
          speed={1} animationType={'fade'} source={require("../../Components/trophy.json")}></AnimatedLoader>)}
        {congrats && toggleLoader()}
        {isDiscarding &&(
          <DiscardingPage 
            handleDiscardPress={handleDiscardPress} 
            setQuantity = {setQuantity}
            setSelected ={setSelected}
          ></DiscardingPage>
        )}
        {!isDiscarding &&(
          <AfterDiscardPage></AfterDiscardPage>
        )}   
    </Container>
  )}


