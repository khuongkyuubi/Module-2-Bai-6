import {Rectangle} from "./Rectangle";
import {IColorable} from "./IColorable";

export class Square extends Rectangle implements IColorable{
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }

    howToColor(): string {
        return `Color all four sides..`;
    }
}
