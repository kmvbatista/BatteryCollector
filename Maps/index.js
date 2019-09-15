import React, { Component } from 'react'
import { View, Text, StyleSheet, Picker } from 'react-native'
import  MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import Directions from '../src/Components/Destinations/index'
import markerImage from '../images/resizedIcon48.png'
import { LocationBox, LocationText, LocationBox2, LocationText2, ContainerStyle, PickerBox } from './styles'
import Search from '../src/Components/Search'
import { GetPlacesObject, getPixelSize, GetPlacesArray, CalculatePermission } from '../utils'
import AnimatedLoader from 'react-native-animated-loader'

export default class Map extends Component {
    state = {
        region: null,
        destination: null,
        PickerValue: null,
        directionsResult: null,
        placeToGo: null,
        places: GetPlacesObject(),
        isLoading: true,
        permission: false
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
            this.handlePermission(position.coords.longitude, position.coords.latitude);
            
        }
        const goFailure= () => {
        }
        -26.913455, -49.069124
        const options= 
        {
            timeout: 2000,
            enableHighAccuracy: false,
            maximumAge: 17000
        }
        Geolocation.getCurrentPosition(goSuccess, goFailure, options);
        this.toggleLoader();
    }

    handlePermission(long, lat) {
        const permission = CalculatePermission(lat, long)
        this.setState({permission: permission});
    }

    toggleLoader() {
        this.setState({isLoading: false});
    }

    render() {
        const places = this.state.places;

        handleLocationSelected = (itemIndex) => {
            this.setState({destination: GetPlacesArray()[itemIndex]})
        }
        const { region } = this.state;
        return (
            
        <View style={{ flex:1 }}>
                {this.state.isLoading &&(
          <AnimatedLoader  visible={true} animationType={'slide'} overlayColor='rgba(21, 219, 10, 1)' 
          speed={1}  source={require("../src/Components/bigLixeira.json")}></AnimatedLoader>
        )}
        { !this.state.isLoading &&(
        <>
            <MapView
                style={{ flex:1 }}
                region={region}
                showsUserLocation
                loadingEnabled
                annotations={this.state.places.Prefeitura}
                ref= {el => this.mapView= el}
            >
            <MapView.Marker
                        coordinate={{latitude: -26.913829,
                            longitude: -49.069169
                        }}
                        title={this.state.places.Prefeitura.title}
                        description={"Descarte suas baterias aqui"}
                        image = {markerImage}
                    >
                    </MapView.Marker>
                    
                    <MapView.Marker
                        coordinate={{latitude: -26.920532,
                            longitude: -49.069610}}
                        title={this.state.places.Neumarkt.title}
                        description={"Descarte suas baterias aqui"}
                        image = {markerImage}
                    ></MapView.Marker>

                    <MapView.Marker
                        coordinate={{latitude: -26.891123,
                            longitude: -49.084850}}
                        title={this.state.places.Furb.title}
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
        </>)}
            <Search handleLocationSelected={handleLocationSelected}></Search>
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