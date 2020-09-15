import DataType from "./DataType.js";
import Event from "./Event.js";

const data1 = DataType({type: 1, unit: "cm"});

var date = new Date();
const e1 = Event(date.getHours(), "Chisinau");

console.log(data1.getType(), " ", data1.getUnit());
console.log(e1.getPlace(), " ", e1.getTime());


// function print(type, unit)
// {
//     const options = {type, unit}
//     Object.assign(options, DataType(options));
//     return options;
// }

// const p = print(1,2);
// p.getType();