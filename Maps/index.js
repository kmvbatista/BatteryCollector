import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import  MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import Directions from '../src/Components/Destinations/index'
import { getPixelSize } from '../utils'
import markerImage from '../images/resizedIcon48.png'
import { LocationBox, LocationText, LocationBox2, LocationText2, ContainerStyle, PickerBox } from './styles'
import {Picker} from 'react-native'
import Tabs from '../src/Tabs';



export default class Map extends Component {
    state = {
        region: null,
        destination: null,
        PickerValue: null,
        directionsResult: null,
        placeToGo: null
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
        -26.913455, -49.069124
        const options= 
        {
            timeout: 2000,
            enableHighAccuracy: false,
            maximumAge: 17000
        }
        Geolocation.getCurrentPosition(goSuccess, goFailure, options);
    }
    render() {
        const Prefeitura = 
        {
            latitude: -26.913829,
            longitude: -49.069169,
            title: 'Prefeitura',
            subtitle: 'Prefeitura Blumenau'
        }
        const Neumarkt = 
        {
            latitude: -26.920532,
            longitude: -49.069610,
            title: "Neumarkt",
            subtitle: "Neumarkt Shopping"
        }
        const Furb =
        {
            latitude: -26.891123,
            longitude: -49.084850,
            title: "Furb Campus 2",
            subtitle: "Furb Campus 2"
        }

        handleLocationSelected = (itemIndex) => {
            const places= [Prefeitura, Furb,  Neumarkt];
            this.setState({destination: places[itemIndex]})
        }
        const { region } = this.state;
        return (
            
        <View style={{ flex:1 }}>
            <PickerBox>
                <Picker
                    selectedValue= {this.state.PickerValue}
                    
                    onValueChange= {(itemValue, itemIndex)=> {
                        this.setState({PickerValue: itemValue});
                        handleLocationSelected(itemIndex);
                    }}
                >
                    <Picker.Item label="Prefeitura de Blumenau" value="Prefeitura de Blumenau"></Picker.Item>
                    <Picker.Item label="Furb Campus 2" value="Furb Campus 2" > </Picker.Item>
                    <Picker.Item label= "Neumarkt shopping" value="Neumarkt shopping"></Picker.Item>

                </Picker>
            </PickerBox>
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
                            longitude: -49.069169
                        }}
                        title={"Prefeitura De Blumenau"}
                        description={"Descarte suas baterias aqui"}
                        image = {markerImage}
                    >
                    </MapView.Marker>
                    
                    <MapView.Marker
                        coordinate={{latitude: -26.920532,
                            longitude: -49.069610}}
                        title={Neumarkt.title}
                        description={"Descarte suas baterias aqui"}
                        image = {markerImage}
                    ></MapView.Marker>

                    <MapView.Marker
                        coordinate={{latitude: -26.891123,
                            longitude: -49.084850}}
                        title={Furb.title}
                        description={"Descarte suas baterias aqui"}
                        image = {markerImage}
                    ></MapView.Marker>

            
            { !!this.state.destination &&(
                <>
                    <Directions
                        origin= {region}
                        destination= {this.state.destination}
                        onReady= {
                            result =>{

                                this.setState({directionsResult: result})
                                this.mapView.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: getPixelSize(50),
                                        left: getPixelSize(50),
                                        top: getPixelSize(20),
                                        bottom: getPixelSize(20)
                                    }
                                });
                            }
                        }
                    >
                    </Directions>

                    <>
                        {
                            !!this.state.directionsResult && (
                        <MapView.Marker coordinate={region} >   
                            <ContainerStyle>
                                <LocationBox>
                                    <LocationText>
                                        {this.state.directionsResult.distance} km
                                    </LocationText>
                                </LocationBox>
                                <LocationBox2>
                                    <LocationText2>
                                        Até {this.state.PickerValue}
                                    </LocationText2>
                                </LocationBox2>
                            </ContainerStyle>
                        </MapView.Marker>
                            )
                        }
                    </>
                    
                    
                    
                </>
            )}
             </MapView>
        </View>
        );
    }   
    
}
const styles = StyleSheet.create({
    Tabs: {
        backgroundColor: 'rgba(21, 219, 10, 1)'
    },
    tabContainer: {
        backgroundColor: 'rgba(21, 219, 10, 1)',
    }
});