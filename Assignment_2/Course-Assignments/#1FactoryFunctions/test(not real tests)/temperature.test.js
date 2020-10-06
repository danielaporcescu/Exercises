import { TemperatureUnits } from "../src/enums.js";
import Temperature from "./../src/temperature.js";

let temp = Temperature({
  unit: TemperatureUnits.CELSIUS,
  value: 0,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: "speed",
});
temp.convertToC();
console.log(temp.getUnit() + " " + temp.getValue() + " " + temp.getType());
temp.convertToF();
console.log(temp.getUnit() + " " + temp.getValue() + " " + temp.getType());
