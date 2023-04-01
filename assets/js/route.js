'use strict';

import { updateWeather, error404 } from './app.js';
const defaultLocation = "#/weather?lat=51.5073219&lon=-0.1276474"

const currentLocation = function () {
  
}

const seachedLocation = query => {

}

const routes = new Map (
  [
    ["/current-location", currentLocation],
    ["/weather", currentLocation],
  ]
);

const checkHash = function () {
  
}

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
  if (window.location.hash){
    this.window.location.hash = "#/current-location"
  }else{
    
  }
})