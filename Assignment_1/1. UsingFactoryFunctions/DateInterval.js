function DateInterval(options) {
  const dateFrom = () => options.from;
  const dateTo = () => options.to;
  const contains = (date) => date > dateFrom && date < dateTo;

  return {dateFrom, dateTo, contains}
}
