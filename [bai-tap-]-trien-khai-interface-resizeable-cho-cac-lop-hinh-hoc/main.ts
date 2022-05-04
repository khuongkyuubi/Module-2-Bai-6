import {Circle} from "./Circle";
import {Cylinder} from "./Cylinder";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

let circle = new Circle("circle", 10);
let cylinder = new Cylinder("cylinder", 15, 10);
let rectangle = new Rectangle(10, 20, "rectangle");
let square = new Square("square", 15);
console.log("--circle--");
console.log(circle.radius);
circle.resize(50);
console.log(circle.radius);

console.log("--cylinder--");
console.log(cylinder.radius);
console.log(cylinder.height);
cylinder.resize(50);
console.log(cylinder.radius);
console.log(cylinder.height);

console.log("--rectangle--");
console.log(rectangle.width);
console.log(rectangle.height);
rectangle.resize(50);
console.log(rectangle.width);
console.log(rectangle.height);

console.log("--square--");
console.log(square.width);
console.log(square.height);
square.resize(50);
console.log(square.width);
console.log(square.height);

