function Event(options) {
  const getTime = () => options.time;
  const getPlace = () => options.place;

  return { getTime, getPlace };
}

export default Event;
