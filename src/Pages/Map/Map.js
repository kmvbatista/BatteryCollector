import Map from '../../../Maps/index'
import {BackHandler, View, Text, Dimensions, Alert} from 'react-native'
import DiscardButton from './DiscardButton'
import {  ButtonView, Container } from './styles'
import React, {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
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
          <AnimatedLoader  visible={true} animationType={'slide'} overlayColor='rgba(21, 219, 10, 1)' 
          speed={1}  source={require("../../Components/bigLixeira.json")}></AnimatedLoader>
        // <LottieView  visible={true} style={{backgroundColor: 'rgba(21, 219, 10, 1)' }}
        // cacheStrategy={'strong'}
        // source={require("../../Components/city.json")} autoPlay={true} loop={true}></LottieView>
        )}
        
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