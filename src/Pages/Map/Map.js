import Map from '../../../Maps/index'
import {BackHandler, View, Text, Dimensions, Alert} from 'react-native'
import { Container } from './styles'
import React, {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import AnimatedLoader from 'react-native-animated-loader'



export default function Main( { navigation } ) {

    const [initial, setInitial] =  useState(true);
    const [region, setRegion] = useState();
    this._didFocusSubscription = navigation.addListener(  
        'didFocus',
        payload =>
          BackHandler.addEventListener(
            'hardwareBackPress',
            handlebackPress
          )
    );
    //centralizar no index

    const handleSetRegion = (_region) => {
      setRegion(_region);
    }
    const handleNavigationPermission = (condition) => {
      if(condition){
        navigation.navigate('DiscardPage');
      }
      else {
        Alert.alert("Você não está em uma localidade permitida");
      }
    }

    function handlebackPress(){
        return navigation.navigate('Main');
    }

      updateCurrentPosition = async () => { 
      const goSuccess= async (position) => {
          const longitude = position.coords.longitude;
          const latitude = position.coords.latitude;
          const region =  {
             latitude,
             longitude,
             latitudeDelta: 0.0143,
             longitudeDelta: 0.0134
          }
          setRegion(region);
          setInitial(false);
          if(this.state.discardNow) {
              const placePermitted = await getPlacePermitted(latitude, longitude);
              if(placePermitted) {
               this.props.handleNavigationPermission(true);
              }
          }
          
      }
      const goFailure= () => {
          this.setState({permission: false});
          this.props.navigation.navigate('Main');
          alert('Verifique seu GPS, por favor :(');

      }
      const options= 
      {
          timeout: 2000,
          enableHighAccuracy: false,
          maximumAge: 17000
      }
      return Geolocation.getCurrentPosition(goSuccess, goFailure, options);
    }
    return (
      <Container>
          {initial && (
            <AnimatedLoader  visible={true} animationType={'slide'} overlayColor='rgba(21, 219, 10, 1)' 
            speed={1}  source={require("../../Components/Animations/bigLixeira.json")}></AnimatedLoader>
          )}
          {initial && updateCurrentPosition()}
          {!initial && (
          <Map handleNavigationPermission= {handleNavigationPermission}
              region = {region}
              setRegion = {handleSetRegion}>
          </Map>
          )}
      </Container>
    );
}