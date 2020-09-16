import DataType from "./DataType.js";
import Event from "./Event.js";

function WeatherData(options) {

  // const options = { precipitation, temp, wind, coverage, unit, type  };
  const setValue = (newValue) => (options.value = newValue);
  const getValue = () => options.value;

  return {
    // ...Temperature(options),
    // ...Precipitation(options),
    // ...Wind(options),
    // ...CloudCoverage(options),
    setValue,
    getValue,
    ...DataType(options),
    ...Event(options)
  };
}

export default WeatherData;
