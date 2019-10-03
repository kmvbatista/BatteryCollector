import React, { useState } from 'react'
import { View, Text, StyleSheet, Picker } from 'react-native'
import  MapView from 'react-native-maps'
import Directions from '../src/Components/Destinations/index'
import markerImage from '../images/resizedIcon48.png'
import { LocationBox, LocationText, LocationBox2, LocationText2, ContainerStyle, PickerBox } from './styles'
import Search from '../src/Components/Search'
import { GetPlacesObject, getPixelSize, GetPlacesArray } from '../utils'
import DiscardButton from '../src/Pages/Map/DiscardButton'
import AddModal from '../src/Components/Modal/index'

export default function Map(props) {
    const [region, setRegion] = useState(props.region);
    const [destination, setDestination] = useState();
    const [placePermitted, setPlacePermitted] = useState();
    const [directionsResult, setDirectionsResult] = useState();
    const [placeToGo, setPlaceToGo] = useState();
    const [places, setPlaces] = useState(GetPlacesArray());
    const [isLoading, setIsLoading] = useState(true);

    const handleDiscardPress = () => {
        props.handleDiscardButton().then( () => {
        })
    }
    return (
        <View style={{ flex:1 }}>
            { true &&(
                <>
                    <MapView
                        style={{ flex:1 }}
                        region={region}
                        showsUserLocation
                        loadingEnabled
                        ref= {el => this.mapView= el}
                    >
                        {places.map((place)  => 
                            <MapView.Marker
                            coordinate={{latitude: place.latitude,
                                longitude: place.longitude
                            }}
                            title={place.title}
                            image = {markerImage}
                            >
                            </MapView.Marker>
                        )}

                        {!!props.destination &&(
                            <>
                                <Directions
                                    origin= {region}
                                    destination= {props.destination}
                                    onReady= {
                                        result =>{
                                            setDirectionsResult(result);
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
                                        !!directionsResult && (
                                            <MapView.Marker coordinate={region} >   
                                                <ContainerStyle>
                                                    <LocationBox>
                                                        <LocationText>
                                                            {directionsResult.distance} km
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
            <Search handleLocationSelected={props.handleLocationSelected}></Search>
            <DiscardButton onclick={handleDiscardPress}></DiscardButton>
            <AddModal ref={'addModal'} placePermitted={placePermitted}></AddModal>
        </View>
    );
}  
const styles = StyleSheet.create({
    Tabs: {
        backgroundColor: 'rgba(21, 219, 10, 1)'
    },
    tabContainer: {
        backgroundColor: 'rgba(21, 219, 10, 1)',
    }
});

