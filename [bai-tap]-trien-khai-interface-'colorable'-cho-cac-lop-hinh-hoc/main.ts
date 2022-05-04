import {Circle} from "./Circle";
import {Cylinder} from "./Cylinder";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";
import {IColorable} from "./IColorable";

let circle = new Circle("circle", 10);
let cylinder = new Cylinder("cylinder", 15, 10);
let rectangle = new Rectangle(10, 20, "rectangle");
let square = new Square("square", 15);

const shapes :any[] = [];

shapes.push(circle);
shapes.push(cylinder);
shapes.push(rectangle);
shapes.push(square);


shapes.forEach((shape)=>{
    console.log(shape.calculateArea());
    // let IColorable;
    if(shape instanceof Square) console.log(shape.howToColor());
})