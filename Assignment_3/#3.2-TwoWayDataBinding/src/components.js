import model from "./model.js";
import {
  averageSpeed,
  clouds,
  direction,
  maxTemp,
  minTemp,
  totalPre,
} from "./cardValues.js";

//$scope is used as the source for 2-way data binding, can be targeted from the index.html
const module = angular.module("WeatherApp", []);
module.controller("WeatherController", function ($scope, $http) {
  let aModel;
  $scope.value = "";
  $scope.unit = "";
  $scope.type = "";
  $scope.precipitation_type = "";
  $scope.direction = "";
  $scope.place = "";
  $scope.time = "";

  //get request is executed at page start
  $http
    .get("http://localhost:8080/data")
    .then(({ data: data }) => {
      $http.get("http://localhost:8080/forecast").then(({ data: forecast }) => {
        //create model with data and forecast returned from requests,a s well as cards values
        aModel = model(
          data,
          forecast,
          minTemp(data),
          maxTemp(data),
          totalPre(data),
          averageSpeed(data),
          direction(data),
          clouds(data)
        );
        //add them to the scope to update index.html
        $scope.data = aModel.weatherData();
        $scope.forecast = aModel.forecastData();
        $scope.minT = aModel.minTemperature();
        $scope.maxT = aModel.maxTemperature();
        $scope.totalP = aModel.totalPrecipitation();
        $scope.averageW = aModel.averageWindSpeed();
        $scope.dominantW = aModel.dominantDirection();
        $scope.averageC = aModel.averageCoverage();
      });
    })
    .catch(console.err);

  //get data/forecast by place
  $scope.showData = (place) => {
    //get requests appending the place to url
    $http
      .get("http://localhost:8080/data/" + place)
      .then(({ data: data }) => {
        $http
          .get("http://localhost:8080/forecast/" + place)
          .then(({ data: forecast }) => {
            aModel = model(data, forecast);
            $scope.data = aModel.weatherData();
            $scope.forecast = aModel.forecastData();
          });
      })
      .catch(console.err);
  };

  //filter based on date interval
  $scope.filterInterval = () => {
    //get the dates from index.html
    const date_from = document.getElementById("from_date").value;
    const date_to = document.getElementById("to_date").value;
    $http
      .get("http://localhost:8080/data")
      .then(({ data: data }) => {
        $http
          .get("http://localhost:8080/forecast")
          .then(({ data: forecast }) => {
            //filter data by time interval
            const filteredData = data.filter(
              (e) => e.time > date_from && e.time < date_to
            );
            const filteredForecast = forecast.filter(
              (e) => e.time > date_from && e.time < date_to
            );
            aModel = model(filteredData, filteredForecast);
            $scope.data = aModel.weatherData();
            $scope.forecast = aModel.forecastData();
          });
      })
      .catch(console.err);
  };

  //add data
  $scope.addHistoricalData = () => {
    let weatherObject = {};
    //precipitation
    if ($scope.type === "precipitation") {
      weatherObject = {
        type: $scope.type,
        time: $scope.time,
        place: $scope.place,
        value: $scope.value,
        unit: $scope.unit,
        precipitation_type: $scope.precipitation_type,
      };
    }
    //wind
    else if ($scope.type === "wind speed") {
      weatherObject = {
        type: $scope.type,
        time: $scope.time,
        place: $scope.place,
        value: $scope.value,
        unit: $scope.unit,
        direction: $scope.direction,
      };
    }
    //all other weather types
    else {
      weatherObject = {
        type: $scope.type,
        time: $scope.time,
        place: $scope.place,
        value: $scope.value,
        unit: $scope.unit,
      };
    }
    //create a json object for weather data
    const weatherObjectArray = [weatherObject];
    const jsonObject = JSON.stringify(weatherObjectArray);
    aModel.addWeatherData(weatherObject);

    //post data
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    $http
      .post("http://localhost:8080/data", jsonObject, {
        headers,
      })
      .then(() => {
        $http
          .get("http://localhost:8080/data")
          .then(({ data: data }) => {
            $http
              .get("http://localhost:8080/forecast")
              .then(({ data: forecast }) => {
                aModel = model(data, forecast);
                //empty the current data from the scope
                $scope.data = [];
                $scope.data = aModel.weatherData();
                $scope.forecast = aModel.forecastData();
                $scope.result = "Submitted successfuly - " + $scope.data.length;
              });
          })
          .catch(console.err);
      });
  };
});
