import { styledLog } from "../helpers/colored-logs.helper";
import { Colors, WeatherDataTypes } from "./enums";

class CWeatherForecast {
  constructor(options) {
    this.data = options.data;
    this.currentPlace = options.currentPlace;
    this.currentType = options.currentType;
    this.currentPeriod = options.currentPeriod;
  }

  getCurrentPlace() {
    return this.currentPlace;
  }
  setCurrentPlace(place) {
    this.currentPlace = place;
  }
  clearCurrentPlace() {
    this.currentPlace = undefined;
  }
  getCurrentType() {
    return this.currentType;
  }
  setCurrentType(type) {
    this.currentType = type;
  }
  clearCurrentType() {
    this.currentType = undefined;
  }
  getCurrentPeriod() {
    return this.currentPeriod;
  }
  setCurrentPeriod(period) {
    this.currentPeriod = period;
  }
  clearCurrentPeriod() {
    this.currentPeriod = undefined;
  }
}


CWeatherForecast.prototype.convertToUSUnits = function () {
    styledLog(Colors.YELLOW, "Converting to US units");
    this.data.forEach((x) => {
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

  CWeatherForecast.prototype.convertToInternationalUnits = function () {
    styledLog(Colors.YELLOW, "\nConverting to INTERNATIONAL units");
    this.data.forEach((x) => {
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

  CWeatherForecast.prototype.allData = function () {
    return this.data;
  };
  
  CWeatherForecast.prototype.add = function (weatherPrediction) {
    this.data.push(weatherPrediction);
  };
  
  CWeatherForecast.prototype.typeCondition = function (x) {
    return this.getCurrentType() ? x.getType() === this.getCurrentType() : true;
  };
  
  CWeatherForecast.prototype.placeCondition = function (x) {
    return this.getCurrentPlace()
      ? x.getPlace() === this.getCurrentPlace()
      : true;
  };
  
  CWeatherForecast.prototype.dateCondition = function (x) {
    return this.getCurrentPeriod()
      ? this.getCurrentPeriod().contains(x.getTime())
      : true;
  };
  
  CWeatherForecast.prototype.getData = function () {
    let returnArray = [];
  
    this.data.map((x) => {
      this.typeCondition(x) &&
        this.placeCondition(x) &&
        this.dateCondition(x) &&
        returnArray.push(x);
    });
    return returnArray;
  };
  


export default CWeatherForecast;