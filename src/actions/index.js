import axios from 'axios';

const API_KEY = 'e8fed75c765bc183cc0bf22d745d8c10';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},se`;
    const request = axios.get(url);

    

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
