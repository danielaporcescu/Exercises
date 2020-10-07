import { SpeedUnits, WeatherDataTypes, Colors } from "./enums.js";
import WeatherData from "./weather-data.js";
import { msToMph, mphToMs } from "../helpers/unit-converter.helper.js";
import { styledLog } from "../helpers/colored-logs.helper.js";

const Wind = (options) => {
  options.type = WeatherDataTypes.WIND;

  const getDirection = () => options.direction;
  const setDirection = (newDirection) => (options.direction = newDirection);

  const convertToMPH = () => {
    if (options.unit === SpeedUnits.MS) {
      options.unit = SpeedUnits.MPH;
      options.value = msToMph(options.value);
    } else if (options.unit === SpeedUnits.MPH) {
      styledLog(Colors.RED, "Already in MPH");
    } else {
      styledLog(Colors.RED, "Not a supported speed unit");
    }
  };

  const convertToMS = () => {
    if (options.unit === SpeedUnits.MPH) {
      options.unit = SpeedUnits.MS;
      options.value = mphToMs(options.value);
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
    ...WeatherData(options),
  };
};

export default Wind;

// Verification
// let wind = Wind({
//   unit: SpeedUnits.MPH,
//   value: 10,
//   time: new Date(2022, 12, 23),
//   place: "Aarhus",
//   type: "speed",
//   direction: CardinalDirections.SE,
// });

// console.log(wind.getUnit() + " " + wind.getValue());

// wind.convertToMPH();
// console.log(wind.getUnit() + " " + wind.getValue());

// wind.convertToMS();
// console.log(wind.getUnit() + " " + wind.getValue());

// wind.convertToMPH();
// console.log(wind.getUnit() + " " + wind.getValue());

// wind.setDirection(CardinalDirections.NV);
// console.log(wind.getDirection());
