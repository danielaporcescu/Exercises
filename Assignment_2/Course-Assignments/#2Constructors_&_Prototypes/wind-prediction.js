import CWeatherPrediction from "./weather-prediction.js";
import { mphToMs, msToMph } from "../helpers/unit-converter.helper.js";
import { styledLog } from "../helpers/colored-logs.helper.js";
import {
  CardinalDirections,
  Colors,
  WeatherDataTypes,
  SpeedUnits,
} from "./enums.js";

class CWindPrediction extends CWeatherPrediction {
  constructor(unit, time, place, from, to, windDirections) {
    super(WeatherDataTypes.WIND, unit, time, place, from, to);
    this.windDirections = windDirections;
  }
  getWindDirections() {
    return this.windDirections;
  }

  setWindDirections(newWindDirections) {
    this.windDirections = newWindDirections;
  }
}

CWindPrediction.prototype.convertToMPH = function () {
  if (this.unit === SpeedUnits.MS) {
    this.unit = SpeedUnits.MPH;
    this.to = msToMph(this.to);
    this.from = msToMph(this.from);
  } else if (this.unit === SpeedUnits.MPH) {
    styledLog(Colors.RED, "Already in MPH");
  } else {
    styledLog(Colors.RED, "Not a supported speed unit");
  }
};

CWindPrediction.prototype.convertToMS = function () {
  if (this.unit === SpeedUnits.MPH) {
    this.unit = SpeedUnits.MS;
    this.to = mphToMs(this.to);
    this.from = mphToMs(this.from);
  } else if (options.this === SpeedUnits.MS) {
    styledLog(Colors.RED, "Already in MS");
  } else {
    styledLog(Colors.RED, "Not a supported speed unit");
  }
};

export default CWindPrediction;

let w = new CWindPrediction(SpeedUnits.MPH, Date.now, "Aarhus", 2, 5, [
  CardinalDirections.NV,
  CardinalDirections.S,
]);

// Varification
// console.log(w);
// w.convertToMS();
// console.log(w);
// w.convertToMPH();
// console.log(w);
