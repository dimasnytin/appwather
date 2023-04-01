'use strict';

export const weekDayNames = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье"
];

export const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDay()}, ${monthName}`;
}

export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) *1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "После обеда" : "До обеда";

  return `${hours % 12 || 12}:${minutes} ${period}`;
}

// 

export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "После обеда" : "До обеда";

  return `${hours % 12 || 12}:${minutes} ${period}`;
}


// 

export const mps_to_kmh = mps => {
  const mph = mps * 3600;
  return mph / 1000;
}

// 

export const aqiText = {
  1:{
    level: "Отлично",
    message: "Качество воздуха считается удовлетворительным, а загрязнение воздуха практически не представляет риска",
  },
  
  2:{
    level: "Средне",
    message: "Качество воздуха считается удовлетворительным, а загрязнение воздуха практически не представляет риска",
  },

  3: {
    level: "Умеренно",
    message: "Качество воздуха считается удовлетворительным, а загрязнение воздуха практически не представляет риска",
  },

  4: {
    level: "Плохо",
    message: "Качество воздуха считается удовлетворительным, а загрязнение воздуха практически не представляет риска",
  },

  5: {
    level: "Очень плохо",
    message: "Качество воздуха считается удовлетворительным, а загрязнение воздуха практически не представляет риска",
  }
  

}