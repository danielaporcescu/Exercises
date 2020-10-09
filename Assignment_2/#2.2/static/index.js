import {Directions} from "../util/enum.js"

var weatherContainer = document.getElementById("data");

const request = new XMLHttpRequest();
request.onload = function () {
  if (this.status === 200) {
    try {
      const reqObj = JSON.parse(request.responseText);
      console.log(dominantWindDirection(reqObj));
      renderHTML(reqObj);
      //console.log(reqObj.filterPlace());
    } catch (e) {
      console.warn("Error in JSON. Could not parse!");
    }
  } else {
    console.warn("Did not receive 200 OK from response");
  }
};
request.open("GET", "http://localhost:8080/data");
request.send();

function renderHTML(data) {
  var filtered = dominantWindDirection(data);
  weatherContainer.innerHTML = filtered
    .map(
      (x) => `<tr>
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

function filterLatestTime(data) {
  return new Date(Math.max(...data.map((e) => new Date(e.time))));
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

const getDataForLastNDAysForType = (data, n, type) => {
  let limitDate = new Date(Date.now());
  limitDate.setDate(limitDate.getDate() - n);
  return data.filter(
    (x) =>
      new Date(x.time).toLocaleString() > limitDate.toLocaleString() &&
      new Date(x.time).toLocaleString() <
        new Date(Date.now()).toLocaleString() &&
      x.type === type
  );
};

const reducerMin = (min, currentValue) => Math.min(min, currentValue);
const reducerMax = (max, currentValue) => Math.max(max, currentValue);
const reducerTotal = (acumulator, currentValue) => acumulator + currentValue;
const reduceAverage = (acumulator, currentValue) =>
  (acumulator + currentValue) / 2;

function lowestTemperatureValue(data) {
  let temperatureValues = data
    .filter((x) => x.type === "temperature")
    .map((y) => y.value);

  let lowestTemperatureValue =
    temperatureValues.length === 0
      ? undefined
      : temperatureValues.reduce(reducerMin);

  return lowestTemperatureValue;
}

function highestTemperatureValue(data) {
  let temperatureValues = data
    .filter((x) => x.type === "temperature")
    .map((y) => y.value);

  let highestTemperatureValue =
    temperatureValues.length === 0
      ? undefined
      : temperatureValues.reduce(reducerMax);

  return highestTemperatureValue;
}

function totalPrecipitation(data) {
  let precipitationValues = data
    .filter((x) => x.type === "precipitation")
    .map((y) => y.value);

  let totalPrecipitation =
    precipitationValues.length === 0
      ? undefined
      : precipitationValues.reduce(reducerTotal);

  return totalPrecipitation;
}

function averageWindSpeed(data) {
  let windValues = data
    .filter((x) => x.type === "wind speed")
    .map((y) => y.value);

  let averageWindSpeed =
    windValues.length === 0 ? undefined : windValues.reduce(reduceAverage);

  return averageWindSpeed;
}

function dominantWindDirection(data) {
  let windDirections = data
    .filter((x) => x.type === "wind speed")
    .map((y) => y.direction);

      windDirections.map(x=>
          {
              var count = 0;
              switch(x.direction)
              {
                  case "West":
                    count +=windDirections.length();

              }
          })
    let dominantWindDirection =
    windDirections.length === 0
        ? undefined
        : windDirection.length;

  return windDirections;
}
