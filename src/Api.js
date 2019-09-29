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
    debugger;
    return instance;
}

export default api;
// axios.interceptors.request.use(()=>{
//     if(getToken()){
//         api.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiIiwiZXhwIjoxNTY5MTg5NTgzLCJpc3MiOiJrZW5uZWR5QmF0dGVyeVByb2plY3QiLCJhdWQiOiJCYXR0ZXJ5Q29sbGVjdG9yVXNlcnMifQ.CWyKXcv2YQag6KAcALaVjkjzLjtqaXwztiWV6ftYI0U`;
//     }
// });
// axios.interceptors.request.use(function(config) {
//     debugger;
//     return getToken().then( (token) => {
//         if ( token != null ) {
//             config.headers = `Authorization Bearer`+ token;
//         }
//         return config;
//     }, function(err) {
//         console.log('erro interceptors')
//         return Promise.reject(err);
//       });
  
// });