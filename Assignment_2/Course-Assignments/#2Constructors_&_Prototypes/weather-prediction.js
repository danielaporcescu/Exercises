import CEventDataType from "./event-data-type.js";

class CWeatherPrediction extends CEventDataType {
  constructor(type, unit, time, place, from, to) {
    super(type, unit, time, place);
    this.from = from;
    this.to = to;
  }

  setFrom(value) {
    this.from = value;
  }

  getFrom() {
    return this.from;
  }

  setTo(value) {
    this.to = value;
  }

  getTo() {
    return this.to;
  }
}

CWeatherPrediction.prototype.matches = function (weatherData) {
  return (
    this.getFrom() <= weatherData.getValue() &&
    this.getTo() >= weatherData.getValue() &&
    this.getType() === weatherData.getType() &&
    this.getUnit() === weatherData.getUnit()
  );
};


export default CWeatherPrediction;