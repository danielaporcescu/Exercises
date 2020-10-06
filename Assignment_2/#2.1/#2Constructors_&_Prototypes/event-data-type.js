class CEventDataType {
  constructor(type, unit, time, place) {
    this.type = type;
    this.unit = unit;
    this.time = time;
    this.place = place;
  }
  // setType(newType) {
  //   this.type = newType;
  // }
  // setUnit(newUnit) {
  //   this.unit = newUnit;
  // }
  // setTime(newTime) {
  //   this.time = newTime;
  // }
  // setPlace(newPlace) {
  //   this.place = newPlace;
  // }
  getType() {
    return this.type;
  }
  getUnit() {
    return this.unit;
  }
  getTime() {
    return this.time;
  }
  getPlace() {
    return this.place;
  }
}

export default CEventDataType;
