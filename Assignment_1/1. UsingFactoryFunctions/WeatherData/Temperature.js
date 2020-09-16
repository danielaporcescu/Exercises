import WeatherData from "../WeatherData.js";

function Temperature(options) {
  // const convertToF = () => options.temperatureC * 1.8 + 32;
  // const convertToC = () => (options.temperatureF - 32) / 1.8;
  const setTemperatureF = (newTempF) => (options.temp = newTempF);
  const setTemperatureC = (newTempC) => (options.temp = newTempC);
  
  const getTemperatureF = () => options.temp;
  const getTemperatureC = () => options.temp;

  const convertToF = () => options.temp * 1.8 + 32;
  const convertToC = () => (options.temp - 32) / 1.8;

  return {
    setTemperatureF,
    setTemperatureC,
    getTemperatureF,
    getTemperatureC,
    convertToF,
    convertToC,
    ...WeatherData(options)
  };
}

export default Temperature;
