import Animal from "../AbstractClass/Ainmal";
import {Edible} from "../Interfaces/Edible"

export class Chicken extends Animal implements Edible {
    makeSound() : string {
        return "Chicken : cluck-cluck!"
    }
    howToEat(){
        return "Chicken: Could be fried";
    }
}