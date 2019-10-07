import Map from '../../Maps/index'
import {BackHandler, ActivityIndicator} from 'react-native'
import { Container } from './styles'
import React, {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import AnimatedLoader from 'react-native-animated-loader'
import { getPlacePermitted, GetPlacesArray } from '../../Services/LocalizationService'

export default function Main( { navigation } ) {
    const [initial, setInitial] =  useState(true);
    const [region, setRegion] = useState();
    const [discardNow, setDiscardNow] = useState(false); 
    const [destination, setDestination] = useState();
    const [placePermitted, setPlacePermitted] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
      BackHandler.addEventListener(
        'hardwareBackPress',
        handlebackPress
      );
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', handlebackPress);
    })  
    //centralizar no index

    const handleSetRegion = (_region) => {
      setRegion(_region);
    }

    function handlebackPress(){
        return navigation.navigate('Main');
    }

    const handlePermission = (places) => {
      return updateCurrentPosition().then( () => {
        const placePermitted= getPlacePermitted(region.latitude, region.longitude, places);
          debugger;
          setPlacePermitted(placePermitted);
          debugger
          return placePermitted;
      });
    }

    function updateCurrentPosition() { 
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
        if(initial) {
          setInitial(false);
        }
      }
      const goFailure= () => {
        navigation.navigate('Main');
        alert('Verifique seu GPS, por favor :(');
      }
      const options= 
      {
          timeout: 5000,
          enableHighAccuracy: false,
          maximumAge: 60000
      }
      return Geolocation.getCurrentPosition(goSuccess, goFailure, options);
    }

    const doUpdate = () => {
      updateCurrentPosition().then( () => {});
    }
    const handleDiscardButton = (places) => {
      debugger;
      return handlePermission(places).then( placePermittedFound => {
        if(placePermittedFound) {
          return placePermittedFound;
        }
      })
    }

    const handleLocationSelected = (itemIndex, places) => {
      setDestination(places[itemIndex]);
    }

    const confirmButtonPress = () => {
      debugger;
      navigation.navigate('DiscardPage');
    }

    const viewRoutePress = () => {
      debugger;
      setDestination(placePermitted);
    }
    return (
      <Container>
          {initial && (
            <AnimatedLoader  visible={true} animationType={'slide'} overlayColor='rgba(21, 219, 10, 1)' 
            speed={1}  source={require("../../Components/Animations/bigLixeira.json")}></AnimatedLoader>
          )}
          {initial && doUpdate()}
          {!initial && (
          <Map
              handlePermission = {handlePermission}
              setRegion = {handleSetRegion}
              region = {region}
              updateCurrentPosition = {updateCurrentPosition}
              handleDiscardButton = {handleDiscardButton}
              destination = {destination}
              viewRoutePress = {viewRoutePress}
              confirmButtonPress = {confirmButtonPress}
              handleLocationSelected = {handleLocationSelected}
          >
            {isLoading && (
              <ActivityIndicator
                size="large"
                color="#fff"
              >
              </ActivityIndicator>
            )}
          </Map>
          )}
      </Container>
    );
}