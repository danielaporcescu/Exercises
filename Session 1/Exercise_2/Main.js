import point from "./Point.js";
import circle from "./Circle.js";

const points = [point(1,2),point(3,4),point(5,6)]
const circles = [circle(points[0],2), circle(points[1],4),circle(points[2],6), circle(null, 5,10,20)];

const radius = circles.map(x => x.radius)
console.log(circles.map(x => x.toString()))
console.log(radius.toString())
