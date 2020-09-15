import Wind from "./Wind.js";
import Temperature from "./Temperature.js";
import Precipitation from "./Precipitation.js";
import CloudCoverage from "./CloudCoverage.js";

function WeatherData(value) {
  const options = { value };

  return {
    ...Temperature(options),
    ...Precipitation(options),
    ...Wind(options),
    ...CloudCoverage(options),
  };
}

export default WeatherData;

const weather = WeatherData(10, 50);

console.log(
//   weather.getTemperatureC(),
//   weather.getTemperatureF(),
  weather.convertToC(),
  weather.convertToF()
);
