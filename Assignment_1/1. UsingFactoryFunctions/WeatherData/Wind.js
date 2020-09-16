import WeatherData from "../WeatherData.js";


function Wind(options) {
  // const windDirection = () => options.direction;
  // const convertToMPH = () => options.mph * 2.2369;
  // const convertToMS = () => options.ms * 0.447;
  const setWindSpeed = (newWindSpeed) => (options.windSpeed = newWindSpeed);
  const setWindDirection = (newWindDirection) => (options.windDirection = newWindDirection);
  
  const getWindSpeed = () => options.windSpeed;
  const getWindDirection = () => options.windDirection;
  
  const convertToMPH = () => options.windSpeed * 2.2369;
  const convertToMS = () => options.windSpeed * 0.447;
  
  return {
    setWindSpeed,
    setWindDirection,
    getWindSpeed,
    getWindDirection,
    convertToMPH,
    convertToMS,
    ...WeatherData(options)
  };
}

export default Wind;
