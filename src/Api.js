import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'


const api = axios.create({
    baseURL:'http://192.168.0.5:5000'
});

axios.interceptors.request.use(()=>{
    if(getToken()){
        api.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiIiwiZXhwIjoxNTY5MTg5NTgzLCJpc3MiOiJrZW5uZWR5QmF0dGVyeVByb2plY3QiLCJhdWQiOiJCYXR0ZXJ5Q29sbGVjdG9yVXNlcnMifQ.CWyKXcv2YQag6KAcALaVjkjzLjtqaXwztiWV6ftYI0U`;
    }
});


const getToken= async   () => { await AsyncStorage.getItem('@BatteryCollector:token')}

export default api;