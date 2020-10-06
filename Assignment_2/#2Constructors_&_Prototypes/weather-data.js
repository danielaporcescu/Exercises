import CEventDataType from "./event-data-type.js";

class CWeatherData extends CEventDataType {
  constructor(type, unit, time, place, value) {
    super(type, unit, time, place);
    this.value = value;
  }

//   setValue(newValue) {
//     this.value = newValue;
//   }

  getValue() {
    return this.value;
  }
}

export default CWeatherData;