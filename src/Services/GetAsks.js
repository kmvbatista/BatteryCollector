import Api from './Api'

export default function GetAsks() {
  return Api().get('/api/askandanswers').then( ({data}) => {
    return data;
})
  .catch( () => {
})
}