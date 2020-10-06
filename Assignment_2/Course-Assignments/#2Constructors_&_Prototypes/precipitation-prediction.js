import CWeatherPrediction from "./weather-prediction.js";
import { mmToInch, inchToMM } from "../helpers/unit-converter.helper.js";
import { styledLog } from "../helpers/colored-logs.helper.js";
import {
  LengthUnits,
  Colors,
  WeatherDataTypes,
  PrecipitationTypes,
} from "./enums.js";

class CPrecipitationPrediction extends CWeatherPrediction {
  constructor(unit, time, place, from, to, precipitationTypes) {
    super(WeatherDataTypes.PRECIPITATION, unit, time, place, from, to);
    this.precipitationTypes = precipitationTypes;
  }
  getPrecipitationTypes() {
    return this.precipitationTypes;
  }
  setPrecipitationTypes(newPrecipitationTypes) {
    this.precipitationTypes = newPrecipitationTypes;
  }
}
CPrecipitationPrediction.prototype.convertToInches = function () {
  if (this.unit === LengthUnits.MM) {
    this.unit = LengthUnits.INCHES;
    this.from = mmToInch(this.from);
    this.to = mmToInch(this.value);
  } else if (this.unit === LengthUnits.INCHES) {
    styledLog(Colors.RED, "Already in INCHES");
  } else {
    styledLog(Colors.RED, "Not a supported length unit");
  }
};
CPrecipitationPrediction.prototype.convertToMM = function () {
  if (this.unit === LengthUnits.INCHES) {
    this.unit = LengthUnits.MM;
    this.from = inchToMM(this.from);
    this.to = inchToMM(this.to);
  } else if (this.unit === LengthUnits.MM) {
    styledLog(Colors.RED, "Already in MM");
  } else {
    styledLog(Colors.RED, "Not a supported length unit");
  }
};

export default CPrecipitationPrediction;

var p = new CPrecipitationPrediction(
  LengthUnits.INCHES,
  new Date(2000, 2, 2),
  "Brasov",
  10,
  15,
  [PrecipitationTypes.RAIN, PrecipitationTypes.SLUSH]
);

console.log(p);
