import Api from './Api'

export function getPlacePermitted(lat, long) {
  return CalculateDistance(lat, long);
}

export function getPlacesArray() {
  return Api().get('/api/places').then( dataArray  => {
      return dataArray;
  })
}

export function getPlacesObject() {
  return Api().get('/api/places').then( dataArray  => {
      return dataArray[0];
  })
}

export default function getRadioPermitted() {
  return 20;
}