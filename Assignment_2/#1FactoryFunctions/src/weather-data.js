import Event from "./event.js";
import DataType from "./data-type.js";

const WeatherData = (options) => {
  const getValue = () => options.value;

  const setValue = (newValue) => (options.value = newValue);

  return {
    setValue,
    getValue,
    ...Event(options),
    ...DataType(options),
  };
};

export default WeatherData;
