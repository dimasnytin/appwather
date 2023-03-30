/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

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

  // https://youtu.be/QMwyNnjAils?t=6523
}