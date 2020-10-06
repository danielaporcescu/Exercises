import CloudCoverage from "./../src/cloud-coverage.js";
import { WeatherDataTypes } from "../src/enums.js";

let clouds = CloudCoverage({
  unit: "Percentage",
  value: 10,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.CLOUDCOVERAGE,
});
console.log(
  clouds.getUnit() + " " + clouds.getValue() + " " + clouds.getType()
);
