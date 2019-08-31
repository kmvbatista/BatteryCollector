import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';


export default class Map extends Component {
    state = {
        region: null,
    };

    componentDidMount() {

        const goSuccess= (position) => {
            const longitude = position.coords.longitude;
            const latitude = position.coords.latitude;

             this.setState({
                 region: {
                     latitude,
                     longitude,
                     latitudeDelta: 0.0143,
                     longitudeDelta: 0.0134
                 }
             });
        }

        const goFailure= () => {
            console.log('erro kennedy')
        }

        const options= 
            {
                timeout: 2000,
                enableHighAccuracy: false,
                maximumAge: 17000
            }
            Geolocation.getCurrentPosition(goSuccess, goFailure, options);
            console.log(this.state);
    }

    render() {
        const { region } = this.state;
        return (
        <View style={{ flex:1 }}>
            <MapView
                style={{ flex:1 }}
                region={region}
                showsUserLocation
                loadingEnabled
            >
             </MapView> 
        </View>
        );
    }   
    
}