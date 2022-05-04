import {Chicken} from "./Animals/Chicken";
import {Tiger} from "./Animals/Tiger";
import {Apple} from "./Fruilts/Apple";
import {Orange} from "./Fruilts/Orange";
//@ts-ignore
console.log("Animal".padStart(8, '-').padEnd(10, '-'));
let animals: any[] = [];
animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach((animal) => {
    console.log(animal.makeSound())
    if (animal instanceof Chicken) {
        console.log(animal.howToEat());
    }
});
//@ts-ignore
console.log("Fruit".padStart("Fruit".length+2, '-').padEnd("Fruit".length+4, '-'));
let fruits: any[] = [];

fruits[0] = new Apple();
fruits[1] = new Orange();

fruits.forEach((fruit)=> console.log(fruit.howToEat()));
