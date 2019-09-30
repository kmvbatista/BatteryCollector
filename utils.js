import { Platform, PixelRatio } from 'react-native';
import CalculateDistance from './src/CalculatePermission/haversine';
import Api from './src/Api'

export function getPixelSize(pixels) {
    return Platform.select({
        ios: pixels,
        android: PixelRatio.getPixelSizeForLayoutSize(pixels)
    })
}
const Prefeitura = 
    {
        id: 4,
        latitude: -26.913829,
        longitude: -49.069169,
        title: 'Prefeitura',
        subtitle: 'Prefeitura Blumenau'
    }

    const Furb =
    {
        id: 5,
        latitude: -26.891123,
        longitude: -49.084850,
        title: "Furb Campus 2",
        subtitle: "Furb Campus 2"
    }

export function GetPlacesObject() {
    return  {Prefeitura, Furb};
}

export function GetPlacesArray() {
    return [Prefeitura, Furb];
}

export function getPlacePermitted(lat, long) {
    return CalculateDistance(lat, long);
} 

export function getRadioPermitted() {
    return 9000;
}

export async function getChartStatistics() {
    const {data} = await Api().post('/api/discards/all', {id: 3});
    return data;
}

export function getGeneralStatistics() {

}

export function getYearDiscards() {

}
