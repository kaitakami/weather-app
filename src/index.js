import './index.html';
import './styles/global.css';
import './styles/normalize.css'

import * as Weather from './modules/weather'

// Create an function that does an api request to get the weather in a certain location. The first location (load) will be Guanajuato. There should be an input in the site where the user can input their location. For that, a form (input) validation input will be created. After that we will take that location and do the fetch wit that location. If that location doesn't exist a message will be displayed.
// The background will be a gif. To do this I will use the giphy api. Every time the location changes the background should change.


window.onload = Weather.default('guanajuato', 'metric')