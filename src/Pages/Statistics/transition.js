import React, { useState } from 'react';
import Statistics from './Statistics'
import Container from './styles'
import AnimatedLoader from 'react-native-animated-loader'



export default function Transition({navigation}) {
const [isLoading, setIsLoading]= useState(true);

  const toggleLoader = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }
  return(
      
  <Statistics navigation={navigation}></Statistics>
  );
}