import WeatherData from "../WeatherData.js";
import { SpeedUnits } from "../enums.js";

function Wind(options) {
  // const windDirection = () => options.direction;
  // const convertToMPH = () => options.mph * 2.2369;
  // const convertToMS = () => options.ms * 0.447;
  const setWindSpeed = (newValue) => (options.value = newValue);
  const setWindDirection = (newValue) =>
    (options.value = newValue);

  const getWindSpeed = () => options.value;
  const getWindDirection = () => options.value;

  const convertToMPH = () => {
    if (options.unit === SpeedUnits.MS) {
      options.unit = SpeedUnits.MPH;
      options.value = options.value * 2.2369;
    } else console.log(" Wind speed is already in MPH");
  };

  const convertToMS = () => {
    if (options.unit === SpeedUnits.MPH) {
      options.unit = SpeedUnits.MS;
      options.value = options.value * 0.447;
    } else console.log(" Wind speed is already in MS");
  };

  return {
    setWindSpeed,
    setWindDirection,
    getWindSpeed,
    getWindDirection,
    convertToMPH,
    convertToMS
  };
}

export default Wind;
