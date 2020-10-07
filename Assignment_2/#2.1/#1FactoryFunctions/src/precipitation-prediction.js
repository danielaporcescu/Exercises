import { LengthUnits, Colors, WeatherDataTypes } from "./enums.js";
import WeatherPrediction from "./weather-prediction.js";
import { mmToInch, inchToMM } from "../helpers/unit-converter.helper.js";
import { styledLog } from "../helpers/colored-logs.helper.js";

const PrecipitationPrediction = (options) => {
  options.type = WeatherDataTypes.PRECIPITATION;
  const getPrecipitaionType = () => options.precipitationType;

  const setPrecipitationType = (newPrecipitationtype) =>
    (options.precipitationType = newPrecipitationtype);

  const convertToInches = () => {
    if (options.unit === LengthUnits.MM) {
      options.unit = LengthUnits.INCHES;
      options.from = mmToInch(options.from);
      options.to = mmToInch(options.value);
    } else if (options.unit === LengthUnits.INCHES) {
      styledLog(Colors.RED, "Already in INCHES");
    } else {
      styledLog(Colors.RED, "Not a supported length unit");
    }
  };

  const convertToMM = () => {
    if (options.unit === LengthUnits.INCHES) {
      options.unit = LengthUnits.MM;
      options.from = inchToMM(options.from);
      options.to = inchToMM(options.to);
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
    ...WeatherPrediction(options),
  };
};

export default PrecipitationPrediction;
