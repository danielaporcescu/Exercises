import { TemperatureUnits, Colors, WeatherDataTypes } from "./enums.js";
import WeatherPrediction from "./weather-prediction.js";
import {
  farenheitToCelsius,
  celsiusToFarenheit,
} from "../../helpers/unit-converter.helper.js";
import { styledLog } from "../../helpers/colored-logs.helper.js";

function TemperaturePrediction(options) {
  options.type = WeatherDataTypes.TEMPERATURE;

  const convertToF = () => {
    if (options.unit === TemperatureUnits.CELSIUS) {
      options.unit = TemperatureUnits.FAHRENHEIT;
      options.from = celsiusToFarenheit(options.from);
      options.to = celsiusToFarenheit(options.to);
    } else if (options.unit === TemperatureUnits.FAHRENHEIT) {
      styledLog(Colors.RED, "Already in FAHRENHEIT");
    } else {
      styledLog(Colors.RED, "Not a supported temperature unit");
    }
  };

  const convertToC = () => {
    if (options.unit === TemperatureUnits.FAHRENHEIT) {
      options.unit = TemperatureUnits.CELSIUS;
      options.to = farenheitToCelsius(options.to);
      options.from = farenheitToCelsius(options.from);
    } else if (options.unit === TemperatureUnits.CELSIUS) {
      styledLog(Colors.RED, "Already in CELSIUS");
    } else {
      styledLog(Colors.RED, "Not a supported temperature unit");
    }
  };

  return {
    convertToF,
    convertToC,
    ...WeatherPrediction(options),
  };
}

export default TemperaturePrediction;
