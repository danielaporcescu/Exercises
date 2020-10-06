import DateInterval from "./../src/date-interval.js";

let startdate1 = new Date(2014, 2, 3);
let startdate2 = new Date(2015, 4, 6);
let enddate1 = new Date(2020, 4, 8);
let enddate2 = new Date(2020, 1, 8);
let date1 = new Date(2016, 2, 3);
let date2 = new Date(2021, 2, 3);

console.log(startdate1);
console.log(startdate2);
console.log(enddate1);
console.log(enddate2);
console.log(date1);
console.log(date2);

let dateInterval1 = DateInterval({ startDate: startdate1, endDate: enddate1 });
let dateInterval2 = DateInterval({ startDate: startdate2, endDate: enddate2 });

console.log(dateInterval1);
console.log(dateInterval2);

console.log(dateInterval1.contains(date1));
console.log(dateInterval1.contains(date2));

console.log(dateInterval2.contains(date1));
console.log(dateInterval2.contains(date2));
