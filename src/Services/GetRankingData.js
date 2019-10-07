import Api from './Api'

export default function getRankingData() {
  return Api().get('/api/users/ranking').then( ({data}) => {
      return data;
  })
    .catch( (err) => {
    console.log(err);
  })
}