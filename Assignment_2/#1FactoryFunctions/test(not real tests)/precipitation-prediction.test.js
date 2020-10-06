import {
  LengthUnits,
  PrecipitationTypes,
  WeatherDataTypes,
} from "../src/enums.js";
import PrecipitationPrediction from "./../src/precipitation-prediction.js";

let prec = PrecipitationPrediction({
  unit: LengthUnits.MM,
  from: -1,
  to: 2,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.PRECIPITATION,
  precipitationType: PrecipitationTypes.SNOW,
});

prec.convertToInches();
console.log(
  prec.getUnit() +
    " " +
    prec.fromValue() +
    " " +
    prec.toValue() +
    " " +
    prec.getType()
);

prec.convertToMM();
console.log(
  prec.getUnit() +
    " " +
    prec.fromValue() +
    " " +
    prec.toValue() +
    " " +
    prec.getType()
);

prec.convertToMM();

prec.setPrecipitationType(PrecipitationTypes.RAIN);
console.log(prec.getPrecipitaionType());
