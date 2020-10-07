import { LengthUnits, WeatherDataTypes, Colors } from "./enums.js";
import WeatherData from "./weather-data.js";
import { mmToInch, inchToMM } from "../helpers/unit-converter.helper.js";
import { styledLog } from "../helpers/colored-logs.helper.js";

const Precipitation = (options) => {
  options.type = WeatherDataTypes.PRECIPITATION;

  const getPrecipitaionType = () => options.precipitationType;

  const setPrecipitationType = (newPrecipitationtype) =>
    (options.precipitationType = newPrecipitationtype);

  const convertToInches = () => {
    if (options.unit === LengthUnits.MM) {
      options.unit = LengthUnits.INCHES;
      options.value = mmToInch(options.value);
    } else if (options.unit === LengthUnits.INCHES) {
      styledLog(Colors.RED, "Already in INCHES");
    } else {
      styledLog(Colors.RED, "Not a supported length unit");
    }
  };

  const convertToMM = () => {
    if (options.unit === LengthUnits.INCHES) {
      options.unit = LengthUnits.MM;
      options.value = inchToMM(options.value);
    } else if (options.unit === LengthUnits.MM) {
      styledLog(Colors.RED, "Already in MM");
    } else {
      styledLog(Colors.RED, "Not a supported length unit");
    }
  };

  return {
    getPrecipitaionType,
    setPrecipitationType,
    convertToInches,
    convertToMM,
    ...WeatherData(options),
  };
};

export default Precipitation;
