import * as Weather from './weather';
import * as Gif from './gif';

const bodyEl = document.querySelector('body');
const searchBarInput = document.querySelector('.search-bar__input');
const submitBtn = document.querySelector('#submit-btn');
const modeBtn = document.querySelector('#mode-btn');
const locationNameEl = document.querySelector('.location-name');
const locationTempEl = document.querySelector('.location-temp');
const locationFeelsEl = document.querySelector('.location-feels');
const locationDescriptionEl = document.querySelector('.location-description');
const locationHumidityEl = document.querySelector('.location-humidity');
const locationPressureEl = document.querySelector('.location-pressure');
const errorMessageEl = document.querySelector('.error-message');

// Mode button, fahrenheit (imperial) or celsius (metric / default)
let unit = 'metric';

const changeUnit = () => {
  if (unit === 'metric') {
    unit = 'imperial';
    modeBtn.textContent = 'Change to °C';
  } else if (unit === 'imperial') {
    unit = 'metric';
    modeBtn.textContent = 'Change to °F';
  }
  const location = searchBarInput.value;
  Weather.getWeather(location, unit);
};

modeBtn.addEventListener('click', () => changeUnit());

modeBtn.addEventListener;

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const location = searchBarInput.value;
  Weather.getWeather(location, unit);
});

const displayWeather = (data) => {
  Gif.default(searchBarInput.value);
  errorMessageEl.innerHTML = '';
  locationNameEl.textContent = data.name;
  if (unit === 'metric') {
    locationTempEl.textContent = `Temperature: ${data.main.temp}°C`;
    locationFeelsEl.textContent = `Feels like: ${data.main.feels_like}°C`;
  } else if (unit === 'imperial') {
    locationTempEl.textContent = `Temperature: ${data.main.temp}°F`;
    locationFeelsEl.textContent = `Feels like: ${data.main.feels_like}°F`;
  }
  locationDescriptionEl.textContent = `Description: ${data.weather[0].description}`;
  locationHumidityEl.textContent = `Humidity: ${data.main.humidity}%`;
  locationPressureEl.textContent = `Pressure ${data.main.pressure}`;
};

const displayError = (data) => {
  // Clean container
  locationNameEl.textContent = '';
  const infoTextEl = document.querySelectorAll('.info__text');
  if (data.cod === '400') {
    errorMessageEl.innerHTML = `Error: ${data.message} <br> Input a valid city`;
  } else {
    errorMessageEl.innerHTML = `Error: "${searchBarInput.value}" ${data.message} <br> Input a valid city`;
  }
  infoTextEl.forEach((element) => {
    element.textContent = '';
  });
};

const changeBackgroundImage = (url) => {
  bodyEl.style.backgroundImage = `url(${url})`;
};

export { displayWeather, displayError, changeBackgroundImage };
