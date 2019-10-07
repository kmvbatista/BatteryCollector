import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const api = () => {
    getTokenStorage().then( tokenFound => {
        const instance = axios.create({baseURL:'http://192.168.0.8:5000',
            headers: {
                'Content-Type': 'application/json',
        }});
        instance.interceptors.request.use(function (config) {
            const token = tokenFound;
            config.headers.Authorization =  token ? `Bearer ${token}` : '';
            return config;
        });
    return instance;

    });
}   

export default api;

const getTokenStorage = () => {
    return AsyncStorage.getItem('@BatteryCollector:token').then( token => token );
  }
   