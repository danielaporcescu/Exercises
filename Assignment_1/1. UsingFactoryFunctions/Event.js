function Event(time, place) {
  const getTime = () => time;
  const getPlace = () => place;
  const toString = () => `time = ${time}, place = ${place}`;

  return { getTime, getPlace, toString };
}

export default Event;
