import WindPrediction from "../src/wind-prediction.js";
import { SpeedUnits, CardinalDirections } from "../src/enums.js";

let wind = WindPrediction({
  unit: SpeedUnits.MPH,
  from: 10,
  to: 20,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: "speed",
  direction: CardinalDirections.SE,
});

console.log(
  wind.getUnit() +
    " " +
    wind.fromValue() +
    " " +
    wind.toValue() +
    " " +
    wind.getType()
);

wind.convertToMPH();
console.log(
  wind.getUnit() +
    " " +
    wind.fromValue() +
    " " +
    wind.toValue() +
    " " +
    wind.getType()
);

wind.convertToMS();
console.log(
  wind.getUnit() +
    " " +
    wind.fromValue() +
    " " +
    wind.toValue() +
    " " +
    wind.getType()
);

wind.convertToMPH();
console.log(
  wind.getUnit() +
    " " +
    wind.fromValue() +
    " " +
    wind.toValue() +
    " " +
    wind.getType()
);

wind.setDirection(CardinalDirections.NV);
console.log(wind.getDirection());
