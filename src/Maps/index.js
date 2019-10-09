import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator  } from 'react-native'
import  MapView from 'react-native-maps'
import Directions from '../Components/Destinations/index'
import markerImage from '../../images/resizedIcon48.png'
import { LocationBox, LocationText, LocationBox2, LocationText2, ContainerStyle, PickerBox } from './styles'
import Search from '../Components/Search'
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

    


    handleDiscardPress = () => {
        this.props.handleDiscardButton(this.props.places).then( (placePermitted) => {
            if(placePermitted) {
                this.setState({placePermitted: placePermitted})
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
        this.props.handleLocationSelected(itemIndex, this.props.places);
    }

    render() {
        const region = this.props.region;
        return (
            <View style={{ flex:1 }}>
            { !this.props.places && this.getPlaces()}
            { this.props.places &&(
            <>
                <MapView
                    style={{ flex:1 }}
                    region={region}
                    showsUserLocation
                    loadingEnabled
                    ref= {el => this.mapView= el}
                >
                    {this.props.places.map((place)  => 
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
                                                    Até {this.props.destination.name}
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
            {this.props.places &&(
                <Search handleLocationSelected={this.handleLocationSelected} places={this.props.places}></Search>
            )}
             <DiscardButton onclick={this.handleDiscardPress}></DiscardButton>
            {this.props.places &&(   
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

