import {Circle} from "./Circle";
import {Comparable} from "./Comparable";

export class ComparableCircle extends Circle implements Comparable {
    constructor(radius: number) {
        super(radius);
    }

    compareTo(obj: ComparableCircle): number {
        if (this.getRadius() > obj.getRadius()) return 1;
        else if (this.getRadius() < obj.getRadius()) return -1;
        else return 0;

    }
}