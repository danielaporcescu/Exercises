import {
  WeatherDataTypes,
  Colors,
  TemperatureUnits,
  LengthUnits,
  SpeedUnits,
  PrecipitationTypes,
  CardinalDirections,
} from "./enums.js";
import { styledLog } from "../../helpers/colored-logs.helper.js";
import TemperaturePrediction from "./temperature-prediction.js";
import CloudCoveragePrediction from "./cloud-coverage-prediction.js";
import WindPrediction from "./wind-prediction.js";
import PrecipitationPrediction from "./precipitation-prediction.js";

import DateInterval from "./date-interval.js";

const WeatherForecast = (data) => {
  const forPlace = (place) => data.filter((x) => x.getPlace() === place);

  const forType = (type) => data.filter((x) => x.getType() === type);

  const forPeriod = (period) => data.filter((x) => x.contains(x.getTime()));

  const including = (data) => {};

  const convertToUsUnits = () => {
    styledLog(Colors.YELLOW, "'nConverting to US units");
    options.data.map((x) => {
      switch (x.getType()) {
        case WeatherDataTypes.TEMPERATURE:
          x.convertToF();
          break;
        case WeatherDataTypes.CLOUDCOVERAGE:
          break;
        case WeatherDataTypes.WIND:
          x.convertToMPH();
          break;
        case WeatherDataTypes.PRECIPITATION:
          x.convertToInches();
          break;
      }
    });
    styledLog(Colors.YELLOW, "Converted to US units");
  };

  const convertToInternationalUnits = () => {
    styledLog(Colors.YELLOW, "\nConverting to INTERNATIONAL units");
    options.data.map((x) => {
      switch (x.getType()) {
        case WeatherDataTypes.TEMPERATURE:
          x.convertToC();
          break;
        case WeatherDataTypes.CLOUDCOVERAGE:
          break;
        case WeatherDataTypes.WIND:
          x.convertToMS();
          break;
        case WeatherDataTypes.PRECIPITATION:
          x.convertToMM();
          break;
      }
    });
    styledLog(Colors.YELLOW, "Converted to INTERNATIONAL units");
  };

  const averageFromValue = () => {
    let reducer = (total, value) => total + value;

    let cloudArray = data
      .filter((x) => x.getType() === WeatherDataTypes.CLOUDCOVERAGE)
      .map((x) => x.fromValue());
    let precipitationArray = data
      .filter((x) => x.getType() === WeatherDataTypes.PRECIPITATION)
      .map((x) => x.fromValue());
    let tempArray = data
      .filter((x) => x.getType() === WeatherDataTypes.TEMPERATURE)
      .map((x) => x.fromValue());
    let windArray = data
      .filter((x) => x.getType() === WeatherDataTypes.WIND)
      .map((x) => x.fromValue());

    let cloudAverage = cloudArray.reduce(reducer) / cloudArray.length;
    let precipitaionAverage =
      precipitationArray.reduce(reducer) / precipitationArray.length;
    let tempAverage = tempArray.reduce(reducer) / tempArray.length;
    let windAverage =
      windArray.length !== 0 && windArray.reduce(reducer) / windArray.length;

    return { cloudAverage, precipitaionAverage, tempAverage, windAverage };
  };

  const averageToValue = () => {
    let reducer = (total, value) => total + value;

    let cloudArray = data
      .filter((x) => x.getType() === WeatherDataTypes.CLOUDCOVERAGE)
      .map((x) => x.toValue());
    let precipitationArray = data
      .filter((x) => x.getType() === WeatherDataTypes.PRECIPITATION)
      .map((x) => x.toValue());
    let tempArray = data
      .filter((x) => x.getType() === WeatherDataTypes.TEMPERATURE)
      .map((x) => x.toValue());
    let windArray = data
      .filter((x) => x.getType() === WeatherDataTypes.WIND)
      .map((x) => x.toValue());

    let cloudAverage = cloudArray.reduce(reducer) / cloudArray.length;
    let precipitaionAverage =
      precipitationArray.reduce(reducer) / precipitationArray.length;
    let tempAverage = tempArray.reduce(reducer) / tempArray.length;
    let windAverage =
      windArray.length !== 0 && windArray.reduce(reducer) / windArray.length;

    return { cloudAverage, precipitaionAverage, tempAverage, windAverage };
  };

  const getData = () => data;

  return {
    forPlace,
    forType,
    forPeriod,
    including,
    convertToUsUnits,
    convertToInternationalUnits,
    averageFromValue,
    averageToValue,
    getData,
  };
};

export default WeatherForecast;

let temp = TemperaturePrediction({
  unit: TemperatureUnits.CELSIUS,
  from: 0,
  to: 20,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.TEMPERATURE,
});
let temp1 = TemperaturePrediction({
  unit: TemperatureUnits.CELSIUS,
  from: 5,
  to: 40,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.TEMPERATURE,
});
let temp2 = TemperaturePrediction({
  unit: TemperatureUnits.CELSIUS,
  from: 10,
  to: 60,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.TEMPERATURE,
});
let prec = PrecipitationPrediction({
  unit: LengthUnits.MM,
  from: 10,
  to: 2,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.PRECIPITATION,
  precipitationType: PrecipitationTypes.SNOW,
});
let wind = WindPrediction({
  unit: SpeedUnits.MPH,
  from: 10,
  to: 20,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.WIND,
  direction: CardinalDirections.SE,
});
let clouds = CloudCoveragePrediction({
  unit: "Percentage",
  from: -1,
  to: 10,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.CLOUDCOVERAGE,
});
let wh = WeatherForecast([temp, temp1, temp2, prec, clouds]);
debugger;
console.log(wh.averageFromValue());

console.log(wh.forPlace("Aarhus"));
console.log(wh.averageToValue());
