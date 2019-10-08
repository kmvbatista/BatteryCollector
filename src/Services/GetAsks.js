import Api from './Api'
import AsyncStorage from '@react-native-community/async-storage'

export default function GetAsks() {
  return Api().then( api => {
    return api.get('/api/askandanswers').then( ({data}) => {
      return data;
    })
  })
  .catch( (error) => {
    if(error.response.status == 401) {
      handleSair();
    }
  })
}

const handleSair = () => {
  AsyncStorage.removeItem('@BatteryCollector:token').then( () => {
    return props.navigation.navigate('Login')
  })
}