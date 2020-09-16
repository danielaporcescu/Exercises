import Wind from "./Weather/Wind.js";
import Temperature from "./Weather/Temperature.js";
import Precipitation from "./Weather/Precipitation.js";
import CloudCoverage from "./Weather/CloudCoverage.js";

function WeatherData(value) {
  const options = { value };
  const setValue = (newValue) => (options.value = newValue);

  return {
    setValue,
    ...Temperature(options),
    ...Precipitation(options),
    ...Wind(options),
    ...CloudCoverage(options)
  };
}

export default WeatherData;

// const weather = WeatherData(10);
// weather.setValue(100);
// weather.setValue(1000);

// console.log(
//   //   weather.getTemperatureC(),
//   //   weather.getTemperatureF(),
//   weather.convertToF(),
//   weather.convertToC(),
//   weather.getTemperatureC()
// );
