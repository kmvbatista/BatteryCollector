import Api from './Api'

export default function getChartStatistics(userId) {
  return Api().post('/api/discards/all', {id: userId}).then( ({data}) => {
      return data;
  })
  .catch( (err) => {
  console.log(err);
  })
}