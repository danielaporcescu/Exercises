import CWeatherData from "./weather-data.js";
import {WeatherDataTypes } from "./enums.js";

class CCloudCoverage extends CWeatherData {
  constructor(unit, time, place, value) {
    super(WeatherDataTypes.CLOUDCOVERAGE, unit, time, place, value);
  }
}

export default CCloudCoverage;
