import './index.html';
import './styles/global.css';
import './styles/normalize.css';

import * as Weather from './modules/weather';

window.onload = Weather.getWeather('guanajuato', 'metric');
