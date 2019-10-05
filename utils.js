import { Platform, PixelRatio } from 'react-native';
import CalculateDistance from './src/CalculatePermission/haversine';
import Api from './src/Services/Api'

export function getPixelSize(pixels) {
    return Platform.select({
        ios: pixels,
        android: PixelRatio.getPixelSizeForLayoutSize(pixels)
    })
}

export function GetPlacesObject() {
    return Api().get('/api/places').then( dataArray  => {
        return dataArray[0];
    })
}

export function GetPlacesArray() {
    Api().get('/api/places').then( dataArray  => {
        return dataArray;
    })
}

export function getPlacePermitted(lat, long) {
    return CalculateDistance(lat, long);
} 





export function getRankingData() {
    return Api().get('/api/users/ranking').then( ({data}) => {
        debugger
        return data;
    })
        .catch( (err) => {
        console.log(err);
    })
}


