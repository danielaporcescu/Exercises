import { WeatherDataTypes, TemperatureUnits } from "./../src/enums.js";
import TemperaturePrediction from "./../src/temperature-prediction.js";

let temp = TemperaturePrediction({
  unit: TemperatureUnits.CELSIUS,
  from: -1,
  to: 2,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.TEMPERATURE,
});
temp.convertToC();
console.log(
  temp.getUnit() +
    " " +
    temp.fromValue() +
    " " +
    temp.toValue() +
    " " +
    temp.getType()
);
temp.convertToF();
console.log(
  temp.getUnit() +
    " " +
    temp.fromValue() +
    " " +
    temp.toValue() +
    " " +
    temp.getType()
);
