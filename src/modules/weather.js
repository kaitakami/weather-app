import * as UI from './UI';

const loaderEl = document.querySelector('.loader');

async function getWeather(location, unit) {
  try {
    loaderEl.classList.toggle('hidden');
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=da410984cfdefc7c828acace9913c932&units=${unit}`,
    );
    const data = await response.json();
    loaderEl.classList.toggle('hidden');
    if (data.cod === 200) {
      UI.displayWeather(data);
    } else if (data.cod === '400' || data.cod === '404') {
      UI.displayError(data);
    }
  } catch (err) {
    console.log(err);
  }
}

export { getWeather };
