import WeatherData from "../WeatherData.js";
import { TemperatureUnits } from "../enums.js";

function Temperature(options) {
  // const convertToF = () => options.temperatureC * 1.8 + 32;
  // const convertToC = () => (options.temperatureF - 32) / 1.8;
  // const setTemperatureF = (newTempF) => (options.value = newTempF);
  // const setTemperatureC = (newTempC) => (options.value = newTempC);
  const setTemperature = (newValue) => (options.value = newValue);

  // const getTemperatureF = () => options.value;
  // const getTemperatureC = () => options.value;
  const getTemperature = () => options.value;

  const convertToF = () => {
    if (options.unit === TemperatureUnits.CELSIUS) {
      options.unit = TemperatureUnits.FAHRENHEIT;
      options.value = options.value * 1.8 + 32;
    } else console.log("The temperature is already in FAHRENHEIT");
  };

  const convertToC = () => {
    if (options.unit === TemperatureUnits.FAHRENHEIT) {
      options.unit = TemperatureUnits.CELSIUS;
      options.value = (options.value - 32) / 1.8;
    } else console.log("The temperature is already in CELSIUS")
  };

  return {
    // setTemperatureF,
    // setTemperatureC,
    // getTemperatureF,
    // getTemperatureC,
    setTemperature,
    getTemperature,
    convertToF,
    convertToC
  };
}

export default Temperature;
