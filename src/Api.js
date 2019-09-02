import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'


const api = axios.create({
    baseURL:'https://batterycollector.azurewebsites.net'
});

axios.interceptors.request.use(()=>{
    if(getToken()){
        api.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;
    }
});


const getToken= async   () => { await AsyncStorage.getItem('@BatteryCollector:token')}

export default api;