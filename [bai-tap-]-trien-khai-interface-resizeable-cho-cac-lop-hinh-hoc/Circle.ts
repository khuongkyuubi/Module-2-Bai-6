import {Shape} from "./Shape";
import {IResizeable} from "./IResizeable";

export class Circle extends Shape implements IResizeable{
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }
    setRadius(radius: number) :void{
        this.radius = radius;
    }
    getRadius() :number{
        return this.radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }
    resize(percent: number) :void {
        this.setRadius(this.getRadius() * percent / 100);
    }
}
