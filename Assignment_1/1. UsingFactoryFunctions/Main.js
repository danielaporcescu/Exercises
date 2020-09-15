import DataType from "./DataType.js";
import Event from "./Event.js";
import DateInterval from "./DateInterval.js";


const data1 = DataType({type: 1, unit: "cm"});
const dateinterval = DateInterval({startDate: new Date('2000-2-2').toDateString(), endDate: new Date("1111-1-1").toDateString()})


var date = new Date();
const e1 = Event(date.getHours(), "Chisinau");

console.log(data1.getType(), " ", data1.getUnit());
console.log(dateinterval.dateFrom(), " ", dateinterval.dateTo());

