export function latestMeasurements(data) {
  var lastTemp;
  var lastPrec;
  var lastWind;
  var lastCloud;

  data.map((x) => {
    switch (x.type) {
      case "temperature":
        if (!lastTemp || lastTemp.time < x.time) lastTemp = x;
        break;
      case "precipitation":
        if (!lastPrec || lastPrec.time < x.time) lastPrec = x;
        break;
      case "wind speed":
        if (!lastWind || lastWind.time < x.time) lastWind = x;
        break;
      case "cloud coverage":
        if (!lastCloud || lastCloud.time < x.time) lastCloud = x;
        break;
      default:
        break;
    }
  });
  return [lastTemp, lastPrec, lastCloud, lastWind];
}

export function getDataForLastNDaysForType(data, n, type) {
  let limitDate = new Date(Date.now());
  limitDate.setDate(limitDate.getDate() - n);
  return data.filter(
    (x) =>
      x.type === type &&
      new Date(x.time).toLocaleString() > limitDate.toLocaleString()
  );
}

const range = (n) => [...Array(n).keys()];
const ms_per_hour = 60 * 60 * 1000;
const hours_after = (date) => (hours) =>
  new Date(date.getTime() + hours * ms_per_hour);
const next_24_hours = (date) => range(24).map(hours_after(date));

export function predictions24Hours(data) {
  let next24Hours = next_24_hours(new Date(Date.now()));
  var filtered = data.filter(
    (x) =>
      new Date(x.time) >= next24Hours[0] && new Date(x.time) <= next24Hours[23]
  );
  return filtered;
}

const reducerMin = (min, currentValue) => Math.min(min, currentValue);
const reducerMax = (max, currentValue) => Math.max(max, currentValue);
const reducerTotal = (acumulator, currentValue) => acumulator + currentValue;
const reduceAverage = (acumulator, currentValue) =>
  (acumulator + currentValue) / 2;

export function lowestTemperatureValue(data) {
  let temperatureValues = data
    .filter((x) => x.type === "temperature")
    .map((y) => y.value);

  let lowestValue =
    temperatureValues.length === 0
      ? undefined
      : temperatureValues.reduce(reducerMin);

  return lowestValue;
}

export function highestTemperatureValue(data) {
  let temperatureValues = data
    .filter((x) => x.type === "temperature")
    .map((y) => y.value);

  let highestValue =
    temperatureValues.length === 0
      ? undefined
      : temperatureValues.reduce(reducerMax);

  return highestValue;
}

export function totalPrecipitation(data) {
  let precipitationValues = data
    .filter((x) => x.type === "precipitation")
    .map((y) => y.value);

  let total =
    precipitationValues.length === 0
      ? undefined
      : precipitationValues.reduce(reducerTotal);

  return total;
}

export function averageWindSpeed(data) {
  let windValues = data
    .filter((x) => x.type === "wind speed")
    .map((y) => y.value);

  let averageSpeed =
    windValues.length === 0 ? undefined : windValues.reduce(reduceAverage);

  return averageSpeed;
}

export function averageCloudCoverage(data) {
  let cloudValues = data
    .filter((x) => x.type === "cloud coverage")
    .map((y) => y.value);

  let averageCoverage =
    cloudValues.length === 0 ? undefined : cloudValues.reduce(reduceAverage);

  return averageCoverage;
}

export function dominantWindDirection(data) {
  let windDirections = data
    .filter((x) => x.type === "wind speed")
    .map((y) => y.direction);

  var mf = 1;
  var m = 0;
  var item;
  for (var i = 0; i < windDirections.length; i++) {
    for (var j = i; j < windDirections.length; j++) {
      if (windDirections[i] == windDirections[j]) m++;
      if (mf < m) {
        mf = m;
        item = windDirections[i];
      }
    }
    m = 0;
  }
  return item;
}
