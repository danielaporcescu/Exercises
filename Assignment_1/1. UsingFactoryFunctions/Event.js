function Event(options) {
  const setTime = (newTime) => options.time=newTime;
  const getTime = () => options.time;

  const setPlace = (newPlace) => options.place=newPlace;
  const getPlace = () => options.place;

  return { setTime, getTime, setPlace, getPlace };
}

export default Event;
