import DataType from "./DataType.js";
import Event from "./Event.js";

const data1 = DataType(1, "cm");
const data2 = DataType(2, "g");

var date = new Date();
const e1 = Event(date.getHours(), "Chisinau");
const e2 = Event(new Date(12, 12, 12), "Brasov");

console.log(data1.getType(), " ", data1.geyUnit());
console.log(e1.getPlace(), " ", e1.getTime());
