"use strict";
var Circle = (function () {
    function Circle(paramRadius) {
        var _this = this;
        this.getArea = function () { return Math.PI * Math.pow(_this.radius, 2); };
        this.radius = paramRadius;
    }
    return Circle;
}());
var Square = (function () {
    function Square(a) {
        var _this = this;
        this.a = a;
        this.getArea = function () { return Math.pow(_this.a, 2); };
    }
    return Square;
}());
