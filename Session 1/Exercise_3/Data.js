function Data(type, time, place) {
  const getType = () => type;
  const getTime = () => time;
  const getPlace = () => place;

  return { getType, getTime, getPlace };
}
export default Data;
