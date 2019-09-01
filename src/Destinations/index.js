import React from 'react'
import MapViewDirections from 'react-native-maps-directions'

const Destinations = ( { destination, origin, onReady } )=>(
    
    <MapViewDirections
        destination= { destination }
        origin = { origin }
        onReady = { onReady }
        apikey = "AIzaSyA3wA5Sjsuv-acrwFO5wG71UODgpJ5d0wY"
        strokeColor= "rgba(21, 219, 10, 1)"
        strokeWidth= { 5 }
    >

    </MapViewDirections>
    )

export default Destinations;