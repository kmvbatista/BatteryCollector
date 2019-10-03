import Map from '../../../Maps/index'
import {BackHandler, View, Text, Dimensions, Alert} from 'react-native'
import { Container } from './styles'
import React, {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';
import AnimatedLoader from 'react-native-animated-loader'
import { getPlacePermitted, GetPlacesArray } from '../../../utils'



export default function Main( { navigation } ) {

    const [initial, setInitial] =  useState(true);
    const [region, setRegion] = useState();
    const [discardNow, setDiscardNow] = useState(false); 
    const [placesSet, setPlacesSet] = useState([]);
    const [destination, setDestination] = useState();
    const [placePermitted, setPlacePermitted] = useState();

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

    const handleDiscardNow = () => {
      const placesToPut = GetPlacesArray();
      setPlacesSet(placesToPut);
    }

    const handlePermission = () => {
      return updateCurrentPosition().then( () => {
        return getPlacePermitted(region.latitude, region.longitude).then( placePermitted => {
          setPlacePermitted(placePermitted);
          return placePermitted;
        })
      }) 
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
    const handleDiscardButton = async () => {
      const placePermittedFound = await handlePermission();
      if(placePermitted) {
          debugger;
          setPlacePermitted(placePermittedFound);
      }
    }

    const toggleLoader = () => {
      this.setState({isLoading: false});
    }

    const viewRoutePress = () => {
      this.setState({destination: placePermitted})
    }

    const handleLocationSelected = (itemIndex) => {
      this.setState({destination: GetPlacesArray()[itemIndex]})
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
              handleNavigationPermission= {handleNavigationPermission}
              handlePermission = {handlePermission}
              setRegion = {handleSetRegion}
              region = {region}
              setDiscardNow = {handleDiscardNow}
              updateCurrentPosition = {updateCurrentPosition}
              handleDiscardButton = {handleDiscardButton}
              destination = {destination}
              handleLocationSelected = {handleLocationSelected}
              viewRoutePress = {viewRoutePress}
          >
          </Map>
          )}
      </Container>
    );
}