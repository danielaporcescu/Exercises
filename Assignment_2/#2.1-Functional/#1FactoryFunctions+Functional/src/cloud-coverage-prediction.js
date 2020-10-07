import WeatherPrediction from "./weather-prediction.js";
import { WeatherDataTypes } from "./enums.js";
const CloudCoveragePrediction = (options) => {
  options.type = WeatherDataTypes.CLOUDCOVERAGE;
  return {
    ...WeatherPrediction(options),
  };
};

export default CloudCoveragePrediction;
