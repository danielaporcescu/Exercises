import Temperature from "../src/wind.js";
import TemperaturePrediction from "./../src/temperature-prediction.js";
import { TemperatureUnits, WeatherDataTypes } from "./../src/enums.js";

let temp = Temperature({
  value: 0,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  unit: TemperatureUnits.CELSIUS,
});

let temp1 = TemperaturePrediction({
  fromValue: -1,
  toValue: 2,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  unit: TemperatureUnits.CELSIUS,
});

console.log(temp1.matches(temp));
