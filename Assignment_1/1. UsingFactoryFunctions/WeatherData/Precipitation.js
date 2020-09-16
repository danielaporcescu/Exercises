import WeatherData from "../WeatherData.js";

function Precipitation(options) {
  const setPrecipitation = (newPrecipitation) =>
  (options.precipitation = newPrecipitation);
  const setPrecipitationType = (newPrecipitationType) =>
  (options.precipitationType = newPrecipitationType);
  
  const getPecipitation = () => options.precipitation;
  const getPrecipitationType = () => options.precipitationType;
  
  const convertToInches = () => options.precipitation / 25.4;
  const convertToMm = () => options.precipitation * 25.4;
  
  return {
    setPrecipitation,
    getPecipitation,
    setPrecipitationType,
    getPrecipitationType,
    convertToInches,
    convertToMm,
    ...WeatherData(options)
  };
}

export default Precipitation;
