import axios from 'axios'

const api = axios.create({
    baseURL:'https://batterycollector.azurewebsites.net'
})

export default api;