import React from 'react'
import Map from '../../../Maps/index'
import {BackHandler, View, Text, Dimensions} from 'react-native'
import { ButtonStyled } from './styles'

const {width : WIDTH} = Dimensions.get('window');

export default function Main( { navigation } ) {
    this._didFocusSubscription = navigation.addListener(  
        'didFocus',
        payload =>
          BackHandler.addEventListener(
            'hardwareBackPress',
            handlebackPress
          )
    );

    function handlebackPress(){
        return navigation.navigate('Main');
      }
    return (
        <View style={{display: "flex", flex: 1}}>
          <Map></Map>
          <ButtonStyled
                placeholderTextColor='white' style={{width: WIDTH}}>
                <Text style={{color: white}}>Descartar Agora</Text>  
            </ButtonStyled>
        </View>
    );
}