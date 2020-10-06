const DateInterval = (options) => {
  const setStartDate = (newStartDate) => (options.startDate = newStartDate);
  const setEndDate = (newEndDate) => (options.endDate = newEndDate);

  const clearCurrentPeriod = () => {
    options.startDate = undefined;
    options.endDate = undefined;
  };
  const from = () => options.startDate && options.startDate;
  const to = () => options.endDate && options.endDate;

  const contains = (date) => date > options.startDate && date < options.endDate;

  return { contains, setStartDate, setEndDate, from, to, clearCurrentPeriod };
};
export default DateInterval;
