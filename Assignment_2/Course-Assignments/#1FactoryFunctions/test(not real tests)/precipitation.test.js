import { LengthUnits, PrecipitationTypes } from "../src/enums.js";
import Precipitation from "./../src/precipitation.js";

let prec = Precipitation({
  unit: LengthUnits.MM,
  value: 10,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: "speed",
  precipitationType: PrecipitationTypes.SNOW,
});

prec.convertToInches();
console.log(prec.getUnit() + " " + prec.getValue() + " " + prec.getType());

prec.convertToMM();
prec;
console.log(prec.getUnit() + " " + prec.getValue() + " " + prec.getType());

prec.convertToMM();

prec.setPrecipitationType(PrecipitationTypes.RAIN);
console.log(prec.getPrecipitaionType());
