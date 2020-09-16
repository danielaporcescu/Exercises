function DataType(options) {
  const setType = (newType) => options.type = newType;
  const setUnit = (newUnit) => options.unit = newUnit;
  const getType = () => options.type;
  const getUnit = () => options.unit;

  return { setType, setUnit, getType, getUnit };
}

export default DataType;
