import axios from "axios";

const API_KEY = "bcb025416b9f5b38e8c0191ff677cb0b";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER"; // to keep consistency between reducers and actions

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // Redux promise looks at the payload and if it's a promise, it stops the action entirely and once request finishes, it dispatches a new action of same type but with the payload of unwrapped promise

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}