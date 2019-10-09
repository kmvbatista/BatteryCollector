import AsyncStorage from '@react-native-community/async-storage'

export default function handleLogout() {
  AsyncStorage.removeItem('@BatteryCollector:token').then( () => {
    navigation.navigate('Login')
  })
}
