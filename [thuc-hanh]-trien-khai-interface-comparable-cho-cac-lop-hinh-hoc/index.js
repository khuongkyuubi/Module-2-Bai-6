"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComparableCircle_1 = require("./ComparableCircle");
var Circle_1 = require("./Circle");
var circles = [];
circles[0] = new ComparableCircle_1.ComparableCircle(10);
circles[1] = new ComparableCircle_1.ComparableCircle(20);
circles[2] = new ComparableCircle_1.ComparableCircle(30);
circles[3] = new ComparableCircle_1.ComparableCircle(10);
var circleBegin = new Circle_1.Circle(20);
circles.forEach(function (circle, index) {
    var result = circle.compareTo(circleBegin);
    switch (result) {
        case -1:
            console.log("Circle ".concat(index, " is smaller than circle begin"));
            break;
        case 1:
            console.log("Circle ".concat(index, " is bigger than circle begin"));
            break;
        case 0:
            console.log("Circle ".concat(index, " is equal with circle begin"));
            break;
    }
});
