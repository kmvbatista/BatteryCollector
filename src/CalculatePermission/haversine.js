const getDistanceFromLatLonInMeters = (lat2,lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-(-26.913924));  // deg2rad below
    var dLon = deg2rad(lon2-(-49.069124)); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(-26.913924)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d*1000;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  export default function CalculatePermission (lat, long) {
    const distance = getDistanceFromLatLonInMeters(lat, long);
    if(distance > 10) {
      return false;
    }
    return true;
  }