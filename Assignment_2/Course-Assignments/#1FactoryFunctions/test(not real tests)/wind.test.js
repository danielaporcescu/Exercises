import Wind from "../src/wind.js";
import { SpeedUnits, CardinalDirections } from "../src/enums.js";

let wind = Wind({
  unit: SpeedUnits.MPH,
  value: 10,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: "speed",
  direction: CardinalDirections.SE,
});

console.log(wind.getUnit() + " " + wind.getValue() + " " + wind.getType());

wind.convertToMS();
console.log(wind.getUnit() + " " + wind.getValue() + " " + wind.getType());

wind.convertToMPH();
console.log(wind.getUnit() + " " + wind.getValue() + " " + wind.getType());

wind.setDirection(CardinalDirections.NV);
console.log(wind.getDirection());
