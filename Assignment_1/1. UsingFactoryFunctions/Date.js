function HourMinutes(hour, minutes) {
  const dateObj = new Date();
  const getHour = () => dateObj.getHours(hour);
  const getMinutes = () => dateObj.getMinutes(minutes);

  return {getHour, getMinutes}
}
