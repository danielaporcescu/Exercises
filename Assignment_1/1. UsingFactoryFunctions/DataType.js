function DataType(options) {
  
  const getType = () => options.type;
  const getUnit = () => options.unit;

  return { getType, getUnit};
}

export default DataType;
