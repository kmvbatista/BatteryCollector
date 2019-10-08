import Api from './Api'
import CalculateDistance from '../CalculatePermission/haversine'

export function getPlacePermitted(lat, long, places) {
  return CalculateDistance(lat, long, places);
}

export function getPlacesArray() {
  return Api().then(api => {
    return api.get('/api/places').then( ({data})  => {
      return data;
    })
  })
}

export function getPlacesObject() {
  return Api().then(api => {
    return api.get('/api/places').then( dataArray  => {
      return dataArray[0];
    })
  }) 
}

export function getRadioPermitted() {
  return 9000;
}