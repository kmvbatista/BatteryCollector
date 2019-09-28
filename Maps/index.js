import React, { Component } from 'react'
import { View, Text, StyleSheet, Picker } from 'react-native'
import  MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import Directions from '../src/Components/Destinations/index'
import markerImage from '../images/resizedIcon48.png'
import { LocationBox, LocationText, LocationBox2, LocationText2, ContainerStyle, PickerBox } from './styles'
import Search from '../src/Components/Search'
import { GetPlacesObject, getPixelSize, GetPlacesArray, getPlacePermitted } from '../utils'
import AnimatedLoader from 'react-native-animated-loader'
import DiscardButton from '../src/Pages/Map/DiscardButton'

export default class Map extends Component {
    constructor(props) {
        super(props);
      }
    state = {
        region: null,
        destination: null,
        PickerValue: null,
        directionsResult: null,
        placeToGo: null,
        places: GetPlacesObject(),
        isLoading: true,
        discardNow: false
    };

    

    componentDidMount() {
        this.handlePermission();
    }

    handlePermission() {
        this.props.updateCurrentPosition();
    }

    handleDiscardButton = () => {
        this.state.discardNow = true;
        this.handlePermission();
    }

    toggleLoader() {
        this.setState({isLoading: false});
    }

    render() {
        const places = this.state.places;

        handleLocationSelected = (itemIndex) => {
            this.setState({destination: GetPlacesArray()[itemIndex]})
        }
        const region = this.props.region;
        return (
            <View style={{ flex:1 }}>
            { true &&(
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
                                                Até 
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
                <DiscardButton onclick={this.handleDiscardButton}></DiscardButton>
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