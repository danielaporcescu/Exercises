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

let wh = WeatherHistory({
  data: [],
  place: "Aarhus",
  type: WeatherDataTypes.TEMPERATURE,
  dateInterval: DateInterval({
    startDate: new Date(2010, 10, 24),
    endDate: new Date(2021, 11, 24),
  }),
});
console.log(wh.getCurrentPlace());
wh.setCurrentPlace("Brasov 4ever");
console.log(wh.getCurrentPlace());
wh.clearCurrentPlace();
console.log(wh.getCurrentPlace());

console.log(wh.getCurrentType());
wh.setCurrentType(WeatherDataTypes.WIND);
console.log(wh.getCurrentType());
wh.clearCurrentType();
console.log(wh.getCurrentType());
debugger;
console.log(
  wh.getCurrentDateInterval() ? wh.getCurrentDateInterval().from() : undefined
);

console.log(
  wh.getCurrentDateInterval() ? wh.getCurrentDateInterval().to() : undefined
);
wh.setCurrentDateInterval(
  DateInterval({
    startDate: new Date(2020, 10, 24),
    endDate: new Date(2020, 11, 24),
  })
);
console.log(
  wh.getCurrentDateInterval() ? wh.getCurrentDateInterval().from() : undefined
);

console.log(
  wh.getCurrentDateInterval() ? wh.getCurrentDateInterval().to() : undefined
);
wh.clearCurrentDateInterval();
console.log(
  wh.getCurrentDateInterval() ? wh.getCurrentDateInterval().from() : undefined
);

console.log(
  wh.getCurrentDateInterval() ? wh.getCurrentDateInterval().to() : undefined
);

let temp = Temperature({
  unit: TemperatureUnits.CELSIUS,
  value: 0,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.TEMPERATURE,
});
let prec = Precipitation({
  unit: LengthUnits.MM,
  value: 10,
  time: new Date(2014, 12, 23),
  place: "Aarhus",
  type: WeatherDataTypes.PRECIPITATION,
  precipitationType: PrecipitationTypes.SNOW,
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
wh.add(temp);
wh.add(prec);
wh.add(clouds);
wh.add(wind);
wh.printData(wh.data());
wh.convertToUsUnits();
wh.printData(wh.data());

wh.convertToInternationalUnits();
wh.printData(wh.data());
console.log(wh.data());
wh.printData(wh.data());
wh.setCurrentType(WeatherDataTypes.PRECIPITATION);
wh.printData(wh.data());
wh.clearCurrentType();
wh.printData(wh.data());
wh.clearCurrentPlace();
wh.printData(wh.data());
wh.clearCurrentDateInterval();
wh.printData(wh.data());
wh.convertToUsUnits();
wh.printData(wh.data());
wh.convertToUsUnits();
wh.setCurrentType(WeatherDataTypes.PRECIPITATION);
wh.printData(wh.data());
