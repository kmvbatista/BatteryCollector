import Api from './Api'

export default function getChartStatistics(userId) {
  return Api().then(api => {
    return api.post('/api/discards/all', {id: userId}).then( (response) => {
      if(response.data) {
        return response.data;
      }
    })
    .catch( (err) => {
      alert('Houve um erro na requisição');
    })
  })
}