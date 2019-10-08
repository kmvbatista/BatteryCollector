import { Container } from './styles'
import {  Alert} from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'
import React, { useState } from 'react';
import DiscardingPage from './DiscardingPage'
import AfterDiscardPage from './AfterDiscardPage'
import Api from '../../Services/Api';
import AsyncStorage from '@react-native-community/async-storage'


const list = [
	{Id: 1, Name: 'Bateria', Value: 'Test1 Value'},
	{Id: 2, Name: 'Óleo', Value: 'Test2 Value'},
	{Id: 3, Name: 'Pilha', Value: 'Test3 Value'},
	{Id: 4, Name: 'Test4 Name', Value: 'Test4 Value'}
]

export default function DiscardPage({navigation}) {
  const [selectedItem, setSelected] = useState(null);
  const [congrats, setCongrats] = useState(false);
  const [isDiscarding, setisDiscarding] = useState(true);
  let [quantity, setQuantity] = useState(0);
  let [userLogged, setUserLogged] = useState();

  const handleDiscardPress = () => {
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

  const getDiscardData = () => {
    try {
      return AsyncStorage.getItem('@BatteryCollector:user').then( (user) => {
        const nextPlace = navigation.state.params.nextPlace;
        const userJson = JSON.parse(user);
        return { 
          Material: {id: selectedItem.Id, description: selectedItem.Name},
          MaterialId: selectedItem.Id,
          Quantity: quantity,
          Place: {
            id: nextPlace.id, 
            Name:nextPlace.name,
            latitude: nextPlace.latitude,
            longitude: nextPlace.longitude,
          },
          PlaceId: nextPlace.id,
          User: userJson,
          UserId: userJson.id
        };
      })
      
    }
    catch {
      alert('Ocorreu um erro na aplicação')
    }
  }

  const handleDiscardSuccess = () => {
      setCongrats(true);
      return getDiscardData().then( discardToSend => {
        return Api().then( api => {
          return api.post('/api/discards', discardToSend).then((response) => {
            if(response.status>=400) {
              alert('Tente Novamente mais tarde');
              navigation.navigate('Map');
            }
            else{
              setCongrats(false);
              setisDiscarding(false)
            }
          })
          .catch( (error) => {
            console.log(error);
            alert('Tente Novamente mais tarde');
            navigation.navigate('Map');
          });
        })
      })
    }
  const handleDiscardFailure = () => {
    alert("Por favor, insira valores válidos!")
  }

  return (
    
    <Container>
        {congrats &&(
         <AnimatedLoader  visible={true}  overlayColor='rgba(21, 219, 10, 1)'
          speed={1} animationType={'fade'} source={require("../../Components/Animations/trophy.json")}></AnimatedLoader>)}
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


