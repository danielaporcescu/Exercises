import { SpeedUnits, Colors, WeatherDataTypes } from "./enums.js";
import WeatherPrediction from "./weather-prediction.js";
import { msToMph, mphToMs } from "../../helpers/unit-converter.helper.js";
import { styledLog } from "../../helpers/colored-logs.helper.js";

const WindPrediction = (options) => {
  options.type = WeatherDataTypes.WIND;

  const getDirection = () => options.direction;
  const setDirection = (newDirection) => (options.direction = newDirection);

  const convertToMPH = () => {
    if (options.unit === SpeedUnits.MS) {
      options.unit = SpeedUnits.MPH;
      options.to = msToMph(options.to);
      options.from = msToMph(options.from);
    } else if (options.unit === SpeedUnits.MPH) {
      styledLog(Colors.RED, "Already in MPH");
    } else {
      styledLog(Colors.RED, "Not a supported speed unit");
    }
  };

  const convertToMS = () => {
    if (options.unit === SpeedUnits.MPH) {
      options.unit = SpeedUnits.MS;
      options.to = mphToMs(options.to);
      options.from = mphToMs(options.from);
    } else if (options.unit === SpeedUnits.MS) {
      styledLog(Colors.RED, "Already in MS");
    } else {
      styledLog(Colors.RED, "Not a supported speed unit");
    }
  };
  return {
    getDirection,
    setDirection,
    convertToMPH,
    convertToMS,
    ...WeatherPrediction(options),
  };
};

export default WindPrediction;
