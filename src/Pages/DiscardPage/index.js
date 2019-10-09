import { Container } from './styles'
import {  KeyboardAvoidingView} from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'
import React, { useState } from 'react';
import DiscardingPage from './DiscardingPage'
import AfterDiscardPage from './AfterDiscardPage'
import Api from '../../Services/Api';
import AsyncStorage from '@react-native-community/async-storage'
import getMaterialsApi from '../../Services/GetMaterials'



export default function DiscardPage({navigation}) {
  const [selectedItem, setSelected] = useState(null);
  const [congrats, setCongrats] = useState(false);
  const [isDiscarding, setisDiscarding] = useState(true);
  let [quantity, setQuantity] = useState(0);
  const [materials, setMaterials] = useState();

  const getMaterials = () => {
    return getMaterialsApi().then( materials => {
      setMaterials(materials);
    });
  }

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

  const callApi = () => {
    getMaterials().then( () => {
      setIsLoading(false);
    })
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
    

    <>
    {materials ==undefined && (
            <AnimatedLoader  visible={true} animationType={'slide'} overlayColor='rgba(21, 219, 10, 1)' 
            speed={1}  source={require("../../Components/Animations/bigLixeira.json")}></AnimatedLoader>
          )}
    {materials ==undefined && callApi()}
    <Container>
        {congrats &&(
         <AnimatedLoader  visible={true}  overlayColor='rgba(21, 219, 10, 1)'
          speed={1} animationType={'fade'} source={require("../../Components/Animations/trophy.json")}></AnimatedLoader>)}
        <KeyboardAvoidingView>
          {isDiscarding &&(
            materials && (
            <DiscardingPage 
              handleDiscardPress={handleDiscardPress} 
              setQuantity = {setQuantity}
              setSelected ={setSelected}
              data={materials}
            ></DiscardingPage>)
          )}
          {!isDiscarding &&(
            <AfterDiscardPage></AfterDiscardPage>
          )}
        </KeyboardAvoidingView>
    </Container>
    </>
    

  )}


