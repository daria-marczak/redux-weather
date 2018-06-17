const API_KEY = "bcb025416b9f5b38e8c0191ff677cb0b";

export const FETCH_WEATHER = "FETCH_WEATHER"; // to keep consistency between reducers and actions

export function fetchWeather() {
  return {
    type: FETCH_WEATHER,

  }
}