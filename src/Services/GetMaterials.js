import Api from './Api'

export default function GetAsks() {
  debugger;
  return Api().then( api => {
    return api.get('/api/materials').then( ({data}) => {
      debugger;
      return data;
    })
  })
}
