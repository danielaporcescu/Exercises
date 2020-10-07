import Event from "./event.js";
import WeatherData from "./weather-data.js";
import DataTypes from "./data-type.js";

const WeatherPrediction = (options) => {
  const fromValue = () => options.from;
  const toValue = () => options.to;

  const matches = (weatherData) =>
    options.from <= weatherData.getValue() &&
    options.to >= weatherData.getValue() &&
    options.type === weatherData.getType() &&
    options.unit === weatherData.getUnit();

  return {
    matches,
    fromValue,
    toValue,
    ...Event(options),
    ...DataTypes(options),
    ...WeatherData(options),
  };
};

export default WeatherPrediction;
