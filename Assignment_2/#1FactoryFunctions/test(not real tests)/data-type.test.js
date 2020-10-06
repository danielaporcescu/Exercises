import DataType from "./../src/data-type.js";
let dateType1 = DataType({ type: "Length", unit: "cm" });

console.log(dateType1.getType() + " " + dateType1.getUnit());

dateType1.setType("Speed");
dateType1.setUnit("kmh");

console.log(dateType1.getType() + " " + dateType1.getUnit());
