import React from 'react'
import Map from '../../../Maps/index'
import {BackHandler, View, Text, Dimensions, Alert} from 'react-native'
import DiscardButton from './DiscardButton'
import {  ButtonView, Container } from './styles'
import ModalDropdown from '../../Components/Modals/MapModal/index';
import { Places } from '../../../utils'


export default function Main( { navigation } ) {
  
    this._didFocusSubscription = navigation.addListener(  
        'didFocus',
        payload =>
          BackHandler.addEventListener(
            'hardwareBackPress',
            handlebackPress
          )
    );
    const handleDiscardButton = () => {
      navigation.navigate('DiscardPage')
    }

    function handlebackPress(){
        return navigation.navigate('Main');
      }
    return (
        <Container>
          <Map>
          </Map>
          <ButtonView>
            <DiscardButton onclick={handleDiscardButton}></DiscardButton>
          </ButtonView>
        </Container>
    );
}