"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chicken_1 = require("./Animals/Chicken");
var Tiger_1 = require("./Animals/Tiger");
var Apple_1 = require("./Fruilts/Apple");
var Orange_1 = require("./Fruilts/Orange");
//@ts-ignore
console.log("Animal".padStart(8, '-').padEnd(10, '-'));
var animals = [];
animals[0] = new Tiger_1.Tiger();
animals[1] = new Chicken_1.Chicken();
animals.forEach(function (animal) {
    console.log(animal.makeSound());
    if (animal instanceof Chicken_1.Chicken) {
        console.log(animal.howToEat());
    }
});
//@ts-ignore
console.log("Fruit".padStart("Fruit".length + 2, '-').padEnd("Fruit".length + 4, '-'));
var fruits = [];
fruits[0] = new Apple_1.Apple();
fruits[1] = new Orange_1.Orange();
fruits.forEach(function (fruit) { return console.log(fruit.howToEat()); });
//# sourceMappingURL=index.js.map