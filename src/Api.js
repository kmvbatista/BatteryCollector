import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const api = () => {
    const instance = axios.create({baseURL:'http://192.168.0.2:5000',
    headers: {
        'Content-Type': 'application/json',
    }});
    
    instance.interceptors.request.use(function (config) {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiICIsImV4cCI6MTU2OTczOTExMywiaXNzIjoia2VubmVkeUJhdHRlcnlQcm9qZWN0IiwiYXVkIjoiQmF0dGVyeUNvbGxlY3RvclVzZXJzIn0.5lQvtJLsC_EtrgQYsDDRI7UlISJF8Z0C-zK-JDXtHeA'
        config.headers.Authorization =  token ? `Bearer ${token}` : '';
        return config;
    });
    return instance;
}

export default api;
