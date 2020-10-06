const Event = (options) => {
  const getTime = () => options.time;
  const getPlace = () => options.place;

  const clearPlace = () => (options.place = undefined);

  const setTime = (newTime) => (options.time = newTime);
  const setPlace = (newPlace) => (options.place = newPlace);

  return { getTime, getPlace, clearPlace, setTime, setPlace };
};
export default Event;
