import WindPrediction from "./WeatherPrediction/WindPrediction.js";
import TemperaturePrediction from "./WeatherPrediction/TemperaturePrediction.js";
import PrecipitationPrediction from "./WeatherPrediction/PrecipitationPrediction.js";
import CloudCoveragePrediction from "./WeatherPrediction/CloudcCoveragePrediction.js";

function WeatherPrediction(value) {
  const options = { value };
  const setValue = (newValue) => (options.value = newValue);

  return {
    setValue,
    ...TemperaturePrediction(options),
    ...PrecipitationPrediction(options),
    ...WindPrediction(options),
    ...CloudCoveragePrediction(options)
  };
}

export default WeatherPrediction;