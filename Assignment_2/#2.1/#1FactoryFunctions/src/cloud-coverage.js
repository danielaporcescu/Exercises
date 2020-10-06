import WeatherData from "./weather-data.js";
import { WeatherDataTypes } from "./enums.js";

const CloudCoverage = (options) => {
  options.type = WeatherDataTypes.CLOUDCOVERAGE;
  return { ...WeatherData(options) };
};

export default CloudCoverage;
