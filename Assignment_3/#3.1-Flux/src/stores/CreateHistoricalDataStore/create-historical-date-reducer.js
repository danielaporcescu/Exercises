import * as actionTypes from "./action-types";

const initialState = {
  form: {
    dataType: "Temperature",
    time: null,
    place: null,
    value: null,
    unit: null,
    precipitation_type: null,
    wind_direction: null,
  },
};
const getUnitForType = (type) => {
  switch (type) {
    case "Temperature":
      return "C";
    case "Precipitation":
      return "mm";
    case "WindSpeed":
      return "m/s";
    case "CloudCoverage":
      return "%";
  }
};

const createHistoricalData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_HISTORICAL_DATA:
      return {
        ...state,
      };
    case actionTypes.CHANGE_FORM_HISTORICAL_DATA_TYPE:
      return {
        ...state,
        form: {
          ...state.form,
          dataType: action.dataType,
          unit: getUnitForType(action.dataType),
          wind_direction: null,
          precipitation_type: null,
        },
      };
    case actionTypes.CHANGE_FORM_PLACE:
      return {
        ...state,
        form: {
          ...state.form,
          place: action.place,
        },
      };
    case actionTypes.CHANGE_FORM_VALUE:
      return {
        ...state,
        form: {
          ...state.form,
          value: action.value,
        },
      };

    case actionTypes.CHANGE_FORM_PRECIPITATION_TYPE:
      return {
        ...state,
        form: {
          ...state.form,
          precipitation_type: action.precipitation_type,
        },
      };

    case actionTypes.CHANGE_FORM_DIRECTION:
      return {
        ...state,
        form: {
          ...state.form,
          wind_direction: action.wind_direction,
        },
      };

    case actionTypes.CHANGE_FORM_TIME:
      return {
        ...state,
        form: {
          ...state.form,
          time: action.time,
        },
      };

    default:
      return state;
  }
};

export default createHistoricalData;
