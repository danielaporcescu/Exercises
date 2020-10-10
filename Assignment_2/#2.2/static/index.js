var weatherContainer = document.getElementById("data");
var forecastContainer = document.getElementById("forecast");

//import { next_24_hours } from "../util/dates.js";

const request1 = new XMLHttpRequest();
request1.onload = function () {
  if (this.status === 200) {
    try {
      const reqObj1 = JSON.parse(request1.responseText);
      renderHTMLForData(reqObj1);
      //console.log(getDataForLastNDaysForType(reqObj1, 5, "temperature"));
    } catch (e) {
      console.warn("Error in JSON. Could not parse!");
    }
  } else {
    console.warn("Did not receive 200 OK from response");
  }
};
request1.open("GET", "http://localhost:8080/data");
request1.send();

const request2 = new XMLHttpRequest();
request2.onload = function () {
  if (this.status === 200) {
    try {
      const reqObj2 = JSON.parse(request2.responseText);
      renderHTMLForForecast(reqObj2);
      console.log(predictions24Hours(reqObj2));
    } catch (e) {
      console.warn("Error in JSON. Could not parse!");
    }
  } else {
    console.warn("Did not receive 200 OK from response");
  }
};
request2.open("GET", "http://localhost:8080/forecast");
request2.send();

function renderHTMLForData(data) {
  var filtered = latestMeasurements(data);
  weatherContainer.innerHTML = filtered
    .map(
      (x) =>
        `<tr>
  <td>${x.value}</td>
  <td>${x.type}</td>
  <td>${x.direction}</td>
  <td>${x.unit}</td>
  <td>${x.time}</td>
  <td>${x.place}</td>
    </tr>`
    )
    .join("");
}

function renderHTMLForForecast(data) {
  var filtered = predictions24Hours(data);
  forecastContainer.innerHTML = filtered
    .map(
      (x) =>
        `<tr>
    <td>${x.from}</td>
    <td>${x.to}</td>
    <td>${x.type}</td>
    <td>${x.unit}</td>
    <td>${x.time}</td>
    <td>${x.place}</td>
      </tr>`
    )
    .join("");
}

function latestMeasurements(data) {
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

const getDataForLastNDaysForType = (data, n, type) => {
  let limitDate = new Date(Date.now());
  limitDate.setDate(limitDate.getDate() - n);
  return data.filter(
    (x) =>
      x.type === type &&
      new Date(x.time).toLocaleString() > limitDate.toLocaleString() &&
      new Date(x.time).toLocaleString() < new Date(Date.now()).toLocaleString()
  );
};

const range = n => [...Array(n).keys()];
const ms_per_hour = 60 * 60 * 1000;
const hours_after = date => hours => new Date(date.getTime() + hours * ms_per_hour);
const next_24_hours = date => range(24).map(hours_after(date));


function predictions24Hours(data) {
  let next24Hours = next_24_hours(new Date(Date.now()));
  var filtered = data.filter(
    (x) =>
      new Date(x.time).toLocaleString() >= next24Hours[0].toLocaleString() &&
      new Date(x.time).toLocaleString() <= next24Hours[23].toLocaleString()
  );
  return filtered;
}

const reducerMin = (min, currentValue) => Math.min(min, currentValue);
const reducerMax = (max, currentValue) => Math.max(max, currentValue);
const reducerTotal = (acumulator, currentValue) => acumulator + currentValue;
const reduceAverage = (acumulator, currentValue) =>
  (acumulator + currentValue) / 2;

function lowestTemperatureValue(data) {
  let temperatureValues = data
    .filter((x) => x.type === "temperature")
    .map((y) => y.value);

  let lowestValue =
    temperatureValues.length === 0
      ? undefined
      : temperatureValues.reduce(reducerMin);

  return lowestValue;
}

function highestTemperatureValue(data) {
  let temperatureValues = data
    .filter((x) => x.type === "temperature")
    .map((y) => y.value);

  let highestValue =
    temperatureValues.length === 0
      ? undefined
      : temperatureValues.reduce(reducerMax);

  return highestValue;
}

function totalPrecipitation(data) {
  let precipitationValues = data
    .filter((x) => x.type === "precipitation")
    .map((y) => y.value);

  let total =
    precipitationValues.length === 0
      ? undefined
      : precipitationValues.reduce(reducerTotal);

  return total;
}

function averageWindSpeed(data) {
  let windValues = data
    .filter((x) => x.type === "wind speed")
    .map((y) => y.value);

  let averageSpeed =
    windValues.length === 0 ? undefined : windValues.reduce(reduceAverage);

  return averageSpeed;
}

function averageCloudCoverage(data) {
  let cloudValues = data
    .filter((x) => x.type === "cloud coverage")
    .map((y) => y.value);

  let averageCoverage =
    cloudValues.length === 0 ? undefined : cloudValues.reduce(reduceAverage);

  return averageCoverage;
}

function dominantWindDirection(data) {
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
