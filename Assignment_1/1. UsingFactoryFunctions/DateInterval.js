function DateInterval(options) {
  const dateFrom = () => options.startDate;
  const dateTo = () => options.endDate;
  const contains = (date) => date.given > dateFrom && date.given < dateTo;

  return {dateFrom, dateTo, contains}
}

export default DateInterval;