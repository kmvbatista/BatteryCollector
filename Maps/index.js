import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import Directions from '../src/Destinations/index'
import { getPixelSize } from '../utils'


export default class Map extends Component {
    state = {
        region: null,
        destination: {
            latitude: -26.913829,
            longitude: -49.069169,
            title: 'Prefeitura',
            subtitle: 'Prefeitura Blumenau'
        }
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
    }

    handleLocationSelected = ({ latitude, longitude }) => {
        this.setState({
            destination: {
                latitude,
                longitude,
                title: "Prefeitura"
            }
        })
    }

    render() {
        const Prefeitura = 
        {
            latitude: -26.913829,
            longitude: -49.069169,
            title: 'Prefeitura',
            subtitle: 'Prefeitura Blumenau'
        }
          
        const { region } = this.state;
        return (
        <View style={{ flex:1 }}>
            <MapView
                style={{ flex:1 }}
                region={region}
                showsUserLocation
                loadingEnabled
                annotations={Prefeitura}
                ref= {el => this.mapView= el}
            >
            <MapView.Marker
                coordinate={{latitude: -26.913829,
                longitude: -49.069169}}
                title={"Prefeitura De Blumenau"}
                description={"Descarte suas baterias aqui"}
         />
            { (
                <Directions
                    origin= {region}
                    destination= {this.state.destination}
                    onReady= {
                        result =>{
                            this.mapView.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: getPixelSize(20),
                                    left: getPixelSize(20),
                                    top: getPixelSize(20),
                                    bottom: getPixelSize(20)
                                }
                            });
                        }
                    }
                >
                </Directions>
            )}
             </MapView> 
        </View>
        );
    }   
    
}