import {
  CardinalDirections,
  WeatherDataTypes,
  LengthUnits,
  TemperatureUnits,
  PrecipitationTypes,
  SpeedUnits,
} from "./../src/enums.js";
import WeatherHistory from "../src/weather-history.js";
import DateInterval from "./../src/date-interval.js";
import Temperature from "./../src/temperature.js";
import Precipitation from "./../src/precipitation.js";
import Wind from "./../src/wind.js";
import CloudCoverage from "./../src/cloud-coverage.js";

let temp = Temperature({
  unit: TemperatureUnits.CELSIUS,
  value: 0,
  time: new Date(2014, 11, 23),
  place: "Chisinau",
  type: WeatherDataTypes.TEMPERATURE,
});
let temp1 = Temperature({
  unit: TemperatureUnits.FAHRENHEIT,
  value: 0,
  time: new Date(2014, 11, 30),
  place: "Aarhus",
  type: WeatherDataTypes.TEMPERATURE,
});
let prec = Precipitation({
  unit: LengthUnits.MM,
  value: 10,
  time: new Date(2014, 10, 23),
  place: "Aarhus",
  type: WeatherDataTypes.PRECIPITATION,
  precipitationType: PrecipitationTypes.SNOW,
});
let prec1 = Precipitation({
  unit: LengthUnits.MPH,
  value: 10,
  time: new Date(2012, 12, 23),
  place: "Brasov",
  type: WeatherDataTypes.PRECIPITATION,
  precipitationType: PrecipitationTypes.RAIN,
});
let wind = Wind({
  unit: SpeedUnits.MPH,
  value: 10,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.WIND,
  direction: CardinalDirections.SE,
});
let clouds = CloudCoverage({
  unit: "Percentage",
  value: 10,
  time: new Date(2022, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.CLOUDCOVERAGE,
});

let wh = WeatherHistory([temp, temp1, clouds, prec, prec1, wind]);
// console.log(wh.forPlace("Aarhus"));
// console.log(wh.forType(WeatherDataTypes.PRECIPITATION));

wh.printData(wh.forPlace("Aarhus"));
wh.printData(wh.forType(WeatherDataTypes.TEMPERATURE));
wh.printData(wh.forPeriod(new Date(2014, 10, 23), new Date(2014, 12, 23)))
// wh.printData(wh.data());
// wh.convertToUsUnits();
// wh.printData(wh.data());

// wh.convertToInternationalUnits();
// wh.printData(wh.data());
// console.log(wh.data());
// wh.printData(wh.data());
// wh.setCurrentType(WeatherDataTypes.PRECIPITATION);
// wh.printData(wh.data());
// wh.clearCurrentType();
// wh.printData(wh.data());
// wh.clearCurrentPlace();
// wh.printData(wh.data());
// wh.clearCurrentDateInterval();
// wh.printData(wh.data());
// wh.convertToUsUnits();
// wh.printData(wh.data());
// wh.convertToUsUnits();
// wh.setCurrentType(WeatherDataTypes.PRECIPITATION);
// wh.printData(wh.data());
