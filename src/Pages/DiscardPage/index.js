import { Container, ContentsContainer, TextInputStyled, ButtonStyled, TextStyled } from './styles'
import { Text, Dimensions, StyleSheet, Alert} from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'
import React, { useState } from 'react';
import DiscardingPage from './DiscardingPage'
import AfterDiscardPage from './AfterDiscardPage'
import api from '../../Api'
import AsyncStorage from '@react-native-community/async-storage'


const list = [
	{Id: 1, Name: 'Bateria', Value: 'Test1 Value'},
	{Id: 2, Name: 'Óleo', Value: 'Test2 Value'},
	{Id: 3, Name: 'Pilha', Value: 'Test3 Value'},
	{Id: 4, Name: 'Test4 Name', Value: 'Test4 Value'}
]

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window')

export default function DiscardPage() {
  const [selectedItem, setSelected] = useState(null);
  const [congrats, setCongrats] = useState(false);
  const [isDiscarding, setisDiscarding] = useState(true);
  let [quantity, setQuantity] = useState(0);
  let [userLogged, setUserLogged] = useState();
  let [nextPlace, setNextPlace] = useState();

  const getUserLoggedStorage = async () => {
    try {
      let userFound= await AsyncStorage.getItem('@BatteryCollector:user');
     if(userFound) {
      userFound = JSON.parse(userFound);
       userLogged = userFound;
     }
    }
    catch{
      alert('Ocorreu um erro');
    }
  }

  const getNextPlaceStorage = async () => {
    try {
      let nextPlaceFound= await AsyncStorage.getItem('@BatteryCollector:nextPlace');
     if(nextPlaceFound) {
      nextPlaceFound = JSON.parse(nextPlaceFound);
       nextPlace = nextPlaceFound;
     }
    }
    catch{
      alert('Ocorreu um erro');
    }
  }

  const handleDiscardPress =async () => {
    try {
      quantity = parseInt(quantity);
      if(quantity > 0 && selectedItem != null){
         handleDiscardSuccess();
      }
      else {
         handleDiscardFailure();
      }
    }
    catch (err){
      console.error()
      handleDiscardFailure();
    }
  }

  const getDiscardData = async () => {
    try {
      await getUserLoggedStorage();
      await getNextPlaceStorage();
      return { 
        Material: {id: selectedItem.Id, description: selectedItem.Name},
        MaterialId: selectedItem.Id,
        Quantity: quantity,
        Place: {
          id: nextPlace.id, 
          Name:nextPlace.title,
          latitude: nextPlace.latitude,
          longitude: nextPlace.longitude,
        },
        PlaceId: nextPlace.id,
        User: userLogged,
        UserId: userLogged.id
      };
    }
    catch {
      alert('Ocorreu um erro na aplicação')
    }
  }

  const handleDiscardSuccess = async () => {
    try {
      getDiscardData().then( (toSend) => {
        api().post('/api/discards', toSend).then((response) => {
          if(response.status>=400) {
            alert('Tente Novamente mais tarde');
          }
          else{
            setCongrats(true);
          }
        })
        .catch( () => {
          alert('Tente Novamente mais tarde');
        }); 
      });
    }
    catch(error) {
      alert('Tente Novamente mais tarde');
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
          speed={1} animationType={'fade'} source={require("../../Components/Animations/trophy.json")}></AnimatedLoader>)}
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


