function DataType(type, unit) {
  const getType = () => type;
  const geyUnit = () => unit;
  const toString = () => `type = ${type}, unit = ${unit}`;

  return { getType, geyUnit, toString };
}

export default DataType;
