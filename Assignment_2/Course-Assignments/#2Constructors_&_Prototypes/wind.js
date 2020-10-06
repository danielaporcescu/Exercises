import CWeatherData from "./weather-data.js";
import { SpeedUnits, WeatherDataTypes } from "./enums.js";
import { mphToMs, msToMph } from "../helpers/unit-converter.helper.js";

class CWind extends CWeatherData {
  constructor(unit, time, place, value, direction) {
    super(WeatherDataTypes.WIND, unit, time, place, value);
    this.direction = direction;
  }
}

CWind.prototype.convertToMPH = function () {
  if (this.unit === SpeedUnits.MS) {
    this.unit = SpeedUnits.MPH;
    this.value = msToMph(this.value);
  } else if (this.unit === SpeedUnits.MPH) {
    console.log("\u001b[1;31m Already in MPH");
  } else {
    console.log("\u001b[1;31m Not a supported speed unit");
  }
};

CWind.prototype.convertToMS = function () {
  if (this.unit === SpeedUnits.MPH) {
    this.unit = SpeedUnits.MS;
    this.value = mphToMs(this.value);
  } else if (this.unit === SpeedUnits.MS) {
    console.log("\u001b[1;31m Already in MS");
  } else {
    console.log("\u001b[1;31m Not a supported speed unit");
  }
};

export default CWind;
