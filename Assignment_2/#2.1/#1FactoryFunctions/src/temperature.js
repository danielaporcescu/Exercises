import WeatherData from "./weather-data.js";
import { TemperatureUnits, Colors, WeatherDataTypes } from "./enums.js";
import {
  farenheitToCelsius,
  celsiusToFarenheit,
} from "../helpers/unit-converter.helper.js";
import { styledLog } from "../helpers/colored-logs.helper.js";

const Temperature = (options) => {
  options.type = WeatherDataTypes.TEMPERATURE;

  const convertToF = () => {
    if (options.unit === TemperatureUnits.CELSIUS) {
      options.unit = TemperatureUnits.FAHRENHEIT;
      options.value = celsiusToFarenheit(options.value);
    } else if (options.unit === TemperatureUnits.FAHRENHEIT) {
      styledLog(Colors.RED, "Already in FAHRENHEIT");
    } else {
      styledLog(Colors.RED, "Not a supported temperature unit");
    }
  };

  const convertToC = () => {
    if (options.unit === TemperatureUnits.FAHRENHEIT) {
      options.unit = TemperatureUnits.CELSIUS;
      options.value = farenheitToCelsius(options.value);
    } else if (options.unit === TemperatureUnits.CELSIUS) {
      styledLog(Colors.RED, "Already in CELSIUS");
    } else {
      styledLog(Colors.RED, "Not a supported temperature unit");
    }
  };

  return { convertToF, convertToC, ...WeatherData(options) };
};

export default Temperature;

// Verification
// let temp = Temperature({
//   unit: TemperatureUnits.CELSIUS,
//   value: 0,
//   time: new Date(2022, 12, 23),
//   place: "Aarhus",
//   type: "speed",
// });
// debugger;
// temp.convertToC();
// console.log(temp.getUnit() + " " + temp.getValue());
// temp.convertToF();

// console.log(temp.getUnit() + " " + temp.getValue());
