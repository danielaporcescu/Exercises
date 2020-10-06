import { celsiusToFarenheit, farenheitToCelsius } from "../helpers/unit-converter.helper.js";
import { TemperatureUnits, WeatherDataTypes } from "./enums.js";
import CWeatherPrediction from "./weather-prediction.js";

class CTemperaturePrediction extends CWeatherPrediction {
    constructor(unit, time, place, from, to){
        super(WeatherDataTypes.TEMPERATURE, unit, time, place, from, to);
    }
}

CTemperaturePrediction.prototype.convertToF = function () {
    if (this.unit === TemperatureUnits.CELSIUS) {
      this.unit = TemperatureUnits.FAHRENHEIT;
      this.from = celsiusToFarenheit(this.from);
      this.to=celsiusToFarenheit(this.to);
    } else if (this.unit === TemperatureUnits.FAHRENHEIT) {
      console.log("\u001b[1;31m Already in FAHRENHEIT");
    } else {
      console.log("\u001b[1;31m Not a supported temperature unit");
    }
  };

  CTemperaturePrediction.prototype.convertToC = function () {
    if (this.unit === TemperatureUnits.FAHRENHEIT) {
      this.unit = TemperatureUnits.CELSIUS;
      this.from = farenheitToCelsius(this.from);
      this.to=farenheitToCelsius(this.to);
    } else if (this.unit === TemperatureUnits.CELSIUS) {
      console.log("\u001b[1;31m Already in CELSIUS");
    } else {
      console.log("\u001b[1;31m Not a supported temperature unit");
    }
  };
  
export default CTemperaturePrediction;