const DataType = (options) => {
  const getType = () => options.type;
  const getUnit = () => options.unit;

  const clearType = () => (options.type = undefined);

  const setType = (newType) => (options.type = newType);
  const setUnit = (newunit) => (options.unit = newunit);

  return { getType, getUnit, clearType, setType, setUnit };
};

export default DataType;
