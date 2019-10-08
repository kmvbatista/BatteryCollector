import Api from './Api'

export default function getRankingData() {
  return Api().then( api => {
    return api.get('/api/users/ranking').then( ({data}) => {
      return data;
    })
  })
    .catch( (err) => {
    alert('Houve um erro, tente novamente');
  })
}