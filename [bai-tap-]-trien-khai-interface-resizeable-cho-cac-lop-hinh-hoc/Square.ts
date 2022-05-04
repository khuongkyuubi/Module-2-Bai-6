import {Rectangle} from "./Rectangle";

export class Square extends Rectangle {
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }
    resize(percent: number) :void {
        this.width *= percent/100;
        this.height *= percent/100;
    }
}
