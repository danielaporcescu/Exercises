import { WeatherDataTypes, Colors } from "./enums.js";
import { styledLog } from "../../helpers/colored-logs.helper.js";

const WeatherForecast = (options) => {
  const getCurrentPlace = () => options.place;

  const setCurrentPlace = (newCurrentPlace) =>
    (options.place = newCurrentPlace);

  const clearCurrentPlace = () => (options.place = undefined);

  const getCurrentType = () => options.type;

  const setCurrentType = (newCurrentType) => (options.type = newCurrentType);

  const clearCurrentType = () => (options.type = undefined);

  const getCurrentDateInterval = () => options.dateInterval;

  const setCurrentDateInterval = (newCurrentDateInterval) =>
    (options.dateInterval = newCurrentDateInterval);

  const clearCurrentDateInterval = () => (options.dateInterval = undefined);

  const convertToUsUnits = () => {
    styledLog(Colors.YELLOW, "'nConverting to US units");
    options.data.forEach((x) => {
      switch (x.getType()) {
        case WeatherDataTypes.TEMPERATURE:
          x.convertToF();
          break;
        case WeatherDataTypes.CLOUDCOVERAGE:
          break;
        case WeatherDataTypes.WIND:
          x.convertToMPH();
          break;
        case WeatherDataTypes.PRECIPITATION:
          x.convertToInches();
          break;
      }
    });
    styledLog(Colors.YELLOW, "Converted to US units");
  };

  const convertToInternationalUnits = () => {
    styledLog(Colors.YELLOW, "\nConverting to INTERNATIONAL units");
    options.data.forEach((x) => {
      switch (x.getType()) {
        case WeatherDataTypes.TEMPERATURE:
          x.convertToC();
          break;
        case WeatherDataTypes.CLOUDCOVERAGE:
          break;
        case WeatherDataTypes.WIND:
          x.convertToMS();
          break;
        case WeatherDataTypes.PRECIPITATION:
          x.convertToMM();
          break;
      }
    });
    styledLog(Colors.YELLOW, "Converted to INTERNATIONAL units");
  };

  const typeCondition = (x) =>
    getCurrentType() ? x.getType() === getCurrentType() : true;
  const placeCondition = (x) =>
    getCurrentPlace() ? x.getPlace() === getCurrentPlace() : true;
  const dateCondition = (x) =>
    getCurrentDateInterval()
      ? getCurrentDateInterval().contains(x.getTime())
      : true;

  const add = (weatherData) => options.data.push(weatherData);
  const data = () => {
    let returnArray = [];

    options.data.map((x) => {
      typeCondition(x) &&
        placeCondition(x) &&
        dateCondition(x) &&
        returnArray.push(x);
    });

    return returnArray;
  };
  const allData = () => options.data;

  const printData = (dataArrray) => {
    let historyTitle = "\nWeather forecast:";
    let placeString =
      getCurrentPlace() !== undefined ? " \n - in: " + getCurrentPlace() : "";
    let typeString =
      getCurrentType() !== undefined ? " \n - for: " + getCurrentType() : "";
    let dateString =
      getCurrentDateInterval() !== undefined
        ? " \n - from: " +
          getCurrentDateInterval().from() +
          " \n - to: " +
          getCurrentDateInterval().to()
        : "";

    styledLog(Colors.CYAN, historyTitle);

    styledLog(Colors.BLUE, placeString + typeString + dateString);

    let placeDetailsString = "";
    let typeDetailsString = "";
    dataArrray.map((x) => {
      placeDetailsString = getCurrentPlace() === undefined ? x.getPlace() : "";
      typeDetailsString = getCurrentType() === undefined ? x.getType() : "";
      styledLog(
        Colors.GREEN,
        placeDetailsString +
          " " +
          typeDetailsString +
          " " +
          x.getUnit() +
          " from " +
          x.fromValue() +
          " to " +
          x.toValue()
      );
    });
  };

  return {
    data,
    getCurrentType,
    setCurrentType,
    clearCurrentType,
    getCurrentPlace,
    setCurrentPlace,
    clearCurrentPlace,
    getCurrentDateInterval,
    setCurrentDateInterval,
    clearCurrentDateInterval,
    allData,
    add,
    convertToInternationalUnits,
    convertToUsUnits,
    printData,
  };
};

export default WeatherForecast;
