import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator  } from 'react-native'
import  MapView from 'react-native-maps'
import Directions from '../Components/Destinations/index'
import markerImage from '../../images/resizedIcon48.png'
import { LocationBox, LocationText, LocationBox2, LocationText2, ContainerStyle, PickerBox } from './styles'
import Search from '../Components/Search'
import { getPlacesArray } from '../Services/LocalizationService'
import getPixelSize from '../Services/GetPixelsSize'
import DiscardButton from '../Pages/Map/DiscardButton'
import AddModal from '../Components/Modal/index'

export default class Map extends Component {
    constructor(props) {
        super(props);
      }
    state = {
        region: null,
        destination: null,
        directionsResult: null,
        placeToGo: null,
        places: null,
        isLoading: true,
        placePermitted: null,
        firstDestination: true
    };

    getPlaces() {
        getPlacesArray().then( (result) => {
            this.setState({places: result});
        })
    }


    handleDiscardPress = () => {
        this.props.handleDiscardButton(this.state.places).then( (placePermitted) => {
            if(placePermitted) {
                this.setState({placePermitted: placePermitted})
                debugger;
                this.refs.addModal.showAddModal();
            }
            else {
                alert("Você não está em uma localidade permitida");
            }
        })
        .catch( () => {
            alert("Houve um problema na requisição. Tente mais tarde.");
        })
    }

    routePress = () => {
        this.props.viewRoutePress();
        this.refs.addModal.closeModal();
    }

    handleLocationSelected = (itemIndex) => {
        this.props.handleLocationSelected(itemIndex, this.state.places);
    }

    render() {
        const region = this.props.region;
        return (
            <View style={{ flex:1 }}>
            { !this.state.places && this.getPlaces()}
            { this.state.places &&(
            <>
                <MapView
                    style={{ flex:1 }}
                    region={region}
                    showsUserLocation
                    loadingEnabled
                    ref= {el => this.mapView= el}
                >
                    {this.state.places.map((place)  => 
                        <MapView.Marker
                        coordinate={{latitude: place.latitude,
                            longitude: place.longitude
                        }}
                        key={place.id}
                        title={place.name}
                        image = {markerImage}
                        >
                        </MapView.Marker>
                    )}
                    
                    {!!this.props.destination &&(
                        <>
                            <Directions
                                origin= {region}
                                destination= {this.props.destination}
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
                                !!this.state.directionsResult && 
                                 (
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
            </>
            )}
            {this.state.places &&(
                <Search handleLocationSelected={this.handleLocationSelected} places={this.state.places}></Search>
            )}
             <DiscardButton onclick={this.handleDiscardPress}></DiscardButton>
            {this.state.places &&(   
                <AddModal 
                    ref={'addModal'} 
                    placePermitted={this.state.placePermitted}
                    viewRoutePress={this.routePress}
                    confirmButtonPress = {this.props.confirmButtonPress}
                >
                </AddModal>
            )}
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

