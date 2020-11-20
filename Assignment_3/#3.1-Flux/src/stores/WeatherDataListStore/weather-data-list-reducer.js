import * as actionTypes from "./actionTypes";

const initialState = {
  weatherData: [],
  loading: false,
  place: "None",
};

const weatherDataList = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        weatherData: action.weatherData,
        loading: false,
      };
    case actionTypes.GET_DATA_FAIL:
      return {
        ...state,
        loading: false,
      };
    case actionTypes.GET_DATA_FOR_PLACE_SUCCESS:
      return {
        ...state,
        weatherData: action.weatherData,
        loading: false,
      };
    case actionTypes.CHANGE_PLACE:
      return {
        ...state,
        place: action.place,
      };
    default:
      return state;
  }
};

export default weatherDataList;
