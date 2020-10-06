import CWeatherData from "./weather-data.js";
import {LengthUnits, WeatherDataTypes } from "./enums.js";
import { mmToInch, inchToMM } from "../helpers/unit-converter.helper.js";

class CPrecipitation extends CWeatherData {
  constructor(unit, time, place, value, precipitationType) {
    super(WeatherDataTypes.PRECIPITATION, unit, time, place, value);
    this.precipitationType = precipitationType;
  }
  getPrecipitationType() {
    return this.precipitationType;
  }
}

CPrecipitation.prototype.convertToInches = function () {
  if (this.unit === LengthUnits.MM) {
    this.unit = LengthUnits.INCHES;
    this.value = mmToInch(this.value);
  } else if (this.unit === LengthUnits.INCHES) {
    console.log("\u001b[1;31m Already in INCHES");
  } else {
    console.log("\u001b[1;31m Not a supported length unit");
  }
};

CPrecipitation.prototype.convertToMM = function () {
  if (this.unit === LengthUnits.INCHES) {
    this.unit = LengthUnits.MM;
    this.value = inchToMM(this.value);
  } else if (this.unit === LengthUnits.MM) {
    console.log("\u001b[1;31m Already in MM");
  } else {
    console.log("\u001b[1;31m Not a supported length unit");
  }
};

export default CPrecipitation;
