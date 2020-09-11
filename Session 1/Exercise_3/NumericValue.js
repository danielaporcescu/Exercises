function NumericValue(value, unit) {
  const getValue = () => value;
  const getUnit = () => unit;

  return {getValue, getUnit};
}
export default NumericValue;
