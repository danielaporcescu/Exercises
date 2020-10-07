import {
  CardinalDirections,
  WeatherDataTypes,
  LengthUnits,
  TemperatureUnits,
  PrecipitationTypes,
  SpeedUnits,
} from "./../src/enums.js";
import TemperaturePrediction from "./../src/temperature-prediction.js";
import CloudCoveragePrediction from "./../src/cloud-coverage-prediction.js";
import WindPrediction from "./../src/wind-prediction.js";
import PrecipitationPrediction from "./../src/precipitation-prediction.js";
import WeatherForecast from "./../src/weather-forecast.js";
import DateInterval from "./../src/date-interval.js";

let wh = WeatherForecast({
  data: [],
  place: "Aarhus",
  type: WeatherDataTypes.TEMPERATURE,
  dateInterval: DateInterval({
    startDate: new Date(2010, 10, 24),
    endDate: new Date(2021, 11, 24),
  }),
});

let temp = TemperaturePrediction({
  unit: TemperatureUnits.CELSIUS,
  from: -1,
  to: 2,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.TEMPERATURE,
});
let prec = PrecipitationPrediction({
  unit: LengthUnits.MM,
  from: -1,
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
wh.add(temp);
wh.add(prec);
wh.add(clouds);
wh.add(wind);

// wh.printData(wh.data());
// wh.setCurrentType(WeatherDataTypes.PRECIPITATION);
// wh.printData(wh.data());
wh.clearCurrentType();
// wh.printData(wh.data());
wh.clearCurrentPlace();
// wh.printData(wh.data());
wh.clearCurrentDateInterval();
// wh.printData(wh.data());
wh.convertToUsUnits();
// wh.convertToUsUnits();
wh.convertToInternationalUnits();
wh.printData(wh.data());
wh.convertToUsUnits();
wh.printData(wh.data());
wh.convertToInternationalUnits();
debugger;
wh.printData(wh.data());
