"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Cylinder_1 = require("./Cylinder");
var Rectangle_1 = require("./Rectangle");
var Square_1 = require("./Square");
var circle = new Circle_1.Circle("circle", 10);
var cylinder = new Cylinder_1.Cylinder("cylinder", 15, 10);
var rectangle = new Rectangle_1.Rectangle(10, 20, "rectangle");
var square = new Square_1.Square("square", 15);
var shapes = [];
shapes.push(circle);
shapes.push(cylinder);
shapes.push(rectangle);
shapes.push(square);
shapes.forEach(function (shape) {
    console.log(shape.calculateArea());
    // let IColorable;
    if (shape instanceof Square_1.Square)
        console.log(shape.howToColor());
});
