import * as actionTypes from "./actionTypes";
import axios from "axios";

const url = "http://localhost:8080/";

export const fetchDataSuccess = (weatherData) => {
  return {
    type: actionTypes.GET_DATA_SUCCESS,
    weatherData: weatherData,
  };
};

export const fetchDataFail = (error) => {
  return {
    type: actionTypes.GET_DATA_FAIL,
    error: error,
  };
};

export const fetchDataStart = () => {
  return {
    type: actionTypes.GET_DATA_START,
  };
};

export const changePlace = (place) => {
  return {
    type: actionTypes.CHANGE_PLACE,
    place: place,
  };
};

export const fetchData = (dataType) => {
  let actualUrl = `${url}${dataType === "History" ? "data" : "forecast"}`;
  return (dispatch) => {
    axios
      .get(actualUrl)
      .then((res) => {
        console.log("result");
        console.log(res.data);
        const weatherData = [];
        for (let key in res.data) {
          weatherData.push({
            ...res.data[key],
          });
        }
        dispatch(fetchDataSuccess(weatherData));
        console.log("weather data");
        console.log(weatherData);
      })
      .catch((err) => {
        dispatch(fetchDataFail(err));
      });
  };
};

export const fetchDatForPlace = (place, dataType) => {
  let actualUrl = `${url}${
    dataType === "History" ? "data" : "forecast"
  }/${place}`;

  return (dispatch) => {
    axios
      .get(actualUrl)
      .then((res) => {
        console.log("result");
        console.log(res.data);
        const weatherData = [];
        for (let key in res.data) {
          weatherData.push({
            ...res.data[key],
          });
        }
        dispatch(fetchDataSuccess(weatherData));
        console.log("weather data");
        console.log(weatherData);
      })
      .catch((err) => {
        dispatch(fetchDataFail(err));
      });
  };
};
