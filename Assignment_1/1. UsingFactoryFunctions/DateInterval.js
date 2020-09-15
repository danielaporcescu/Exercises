function DateInterval(options) {
  const dateFrom = () => options.startDate;
  const dateTo = () => options.endDate;
  const contains = (date) => date > dateFrom && date < dateTo;

  return {dateFrom, dateTo, contains}
}

export default DateInterval;