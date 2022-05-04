import {Circle} from "./Circle";
import {IResizeable} from "./IResizeable";

export class Cylinder extends Circle implements IResizeable {
    height: number;

    constructor(name: string,
                radius: number,
                height: number) {
        super(name, radius);
        this.height = height;
    }

    calculateArea(): number {
        return super.calculateArea() * 2 + super.calculatePerimeter() * this.height;
    }

    calculateVolume(): number {
        return super.calculateArea() * this.height;
    }

    resize(percent: number) :void {
        this.radius *= percent/100;
        this.height *= percent/100;
    }

}
