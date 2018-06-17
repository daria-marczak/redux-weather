import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload.data ]; // Not to manipulate the state
  }
  return state;
}