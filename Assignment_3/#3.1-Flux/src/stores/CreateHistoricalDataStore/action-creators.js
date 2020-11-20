import axios from "axios";
import * as actionTypes from "./action-types";

const url = "http://localhost:8080/data";
export const createHistoricalData = (form) => {
  return (dispatch) => {
    axios.post(url, form).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };
};

export const changeFormType = (type) => {
  return {
    type: actionTypes.CHANGE_FORM_HISTORICAL_DATA_TYPE,
    dataType: type,
  };
};

export const changeFormPlace = (place) => {
  return {
    type: actionTypes.CHANGE_FORM_PLACE,
    place: place,
  };
};

export const changeFormValue = (value) => {
  return {
    type: actionTypes.CHANGE_FORM_VALUE,
    value: value,
  };
};

export const changeFormPrecipitationType = (precipitation_type) => {
  return {
    type: actionTypes.CHANGE_FORM_PRECIPITATION_TYPE,
    precipitation_type: precipitation_type,
  };
};

export const changeFormWindDirection = (wind_direction) => {
  return {
    type: actionTypes.CHANGE_FORM_DIRECTION,
    wind_direction: wind_direction,
  };
};

export const changeFormTime = (time) => {
  return {
    type: actionTypes.CHANGE_FORM_TIME,
    time: time,
  };
};
