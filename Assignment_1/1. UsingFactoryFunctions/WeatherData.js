import DataType from "./DataType.js";
import Event from "./Event.js";
import Wind from "./WeatherData/Wind.js";
import Temperature from "./WeatherData/Temperature.js";
import Precipitation from "./WeatherData/Precipitation.js";
import CloudCoverage from "./WeatherData/CloudCoverage.js";

function WeatherData(options) {
  // const options = { precipitation, temp, wind, coverage, unit, type  };
  const setValue = (newValue) => (options.value = newValue);
  const getValue = () => options.value;

  return {
    setValue,
    getValue,
    ...Temperature(options),
    ...Precipitation(options),
    ...Wind(options),
    ...CloudCoverage(options),
    ...DataType(options),
    ...Event(options),
  };
}

export default WeatherData;
