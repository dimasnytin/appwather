
'use stirct';

const api_key = "d4ab741f40bf6e731d3f38c3d528c1b6"; 

// fetch data from server
// @param {string} URL API url
// @param {function} callback callback

export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
  .then(res => res.json())
  .then(data => callback(data));
}

export const url = {
  currentWeather(lat, lon){
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
  },
  forecast(lat, lon){
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
  },
  airPollution(lat, lon){
    return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
  },
  reverseGeo(lat, lon){
    return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
  },
  geo(query){
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
  }
}





// https://www.postman.com/galactic-resonance-776965/workspace/openweather-free/request/24215605-d9a09c0b-9a94-4167-86b0-5a4095eb5e47
// https://home.openweathermap.org/api_keys