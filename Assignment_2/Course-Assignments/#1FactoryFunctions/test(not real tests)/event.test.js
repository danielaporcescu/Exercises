import Event from "./../src/event.js";

let date = new Date(2016, 2, 3);

let event = Event({ time: date, place: "this place" });

console.log(event.getTime());
console.log(event.getPlace());

event.setTime(new Date(2011, 3, 5));
event.setPlace("another place");

console.log(event.getTime());
console.log(event.getPlace());
