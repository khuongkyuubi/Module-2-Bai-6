import {ComparableCircle} from "./ComparableCircle";
import {Circle} from "./Circle";

let circles: any[] = [];
circles[0] = new ComparableCircle(10);
circles[1] = new ComparableCircle(20);
circles[2] = new ComparableCircle(30);
circles[3] = new ComparableCircle(10);

let circleBegin = new Circle(20);

circles.forEach((circle, index) => {
    let result = circle.compareTo(circleBegin);

    switch (result) {
        case -1:
            console.log(`Circle ${index} is smaller than circle begin`);
            break;
        case 1:
            console.log(`Circle ${index} is bigger than circle begin`);
            break;
        case 0:
            console.log(`Circle ${index} is equal with circle begin`);
            break;
    }

})