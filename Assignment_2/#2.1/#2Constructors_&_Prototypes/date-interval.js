class CDateInterval {
  constructor(dateFrom, dateTo) {
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }

  from() {
    return this.dateFrom;
  }

  to() {
    return this.dateTo;
  }
}

CDateInterval.prototype.period = function () {
  return this.dateFrom + " " + this.dateTo;
};
CDateInterval.prototype.contains = function (date) {
  date >= this.dateFrom && date <= this.dateTo;
};

export default CDateInterval;
