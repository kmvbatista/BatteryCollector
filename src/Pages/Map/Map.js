import Map from '../../../Maps/index'
import {BackHandler, View, Text, Dimensions, Alert} from 'react-native'
import DiscardButton from './DiscardButton'
import {  ButtonView, Container } from './styles'
import ModalDropdown from '../../Components/Modals/MapModal/index';
import { Places } from '../../../utils'
import React, {useState, useEffect} from 'react';
import AnimatedLoader from 'react-native-animated-loader'

export default function Main( { navigation } ) {
    const [isLoading, setIsLoading] = useState(true);

    const toggleLoader = () => {
      this.setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }

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
        {isLoading &&(
        <AnimatedLoader  visible={true}  overlayColor='rgba(21, 219, 10, 1)'
          speed={1}  source={require("../../Components/4.json")}></AnimatedLoader>)}
        
        {toggleLoader()}
  
        { !isLoading &&(
        <>  
          <Map>
          </Map>
          <ButtonView>
            <DiscardButton onclick={handleDiscardButton}></DiscardButton>
          </ButtonView>
        </>
        )}
      </Container>
    );
}