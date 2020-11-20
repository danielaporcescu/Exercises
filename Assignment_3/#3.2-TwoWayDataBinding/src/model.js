// model to acces and map weather data/forecast
// data and forecast are arrays
const model = (
  data,
  forecast,
  minT,
  maxT,
  totalP,
  averageW,
  dominantW,
  averageC
) => {
  const weatherData = () => data.map((d) => ({ ...d }));

  const forecastData = () => forecast.map((f) => ({ ...f }));

  const addWeatherData = (d) => {
    data.push(d);
  };

  const minTemperature = () => minT;
  const maxTemperature = () => maxT;
  const totalPrecipitation = () => totalP;
  const averageWindSpeed = () => averageW;
  const dominantDirection = () => dominantW;
  const averageCoverage = () => averageC;

  return {
    weatherData,
    forecastData,
    addWeatherData,
    minTemperature,
    maxTemperature,
    totalPrecipitation,
    averageWindSpeed,
    dominantDirection,
    averageCoverage,
  };
};

export default model;
