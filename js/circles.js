(function () {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method  // hint: area = pi * radius^2
            var area = Math.PI * Math.pow(this.radius, 2);
            // TODO: return the proper value
            return Math.PI * Math.pow(this.radius, 2);
        }
        ,

        logInfo: function (doRounding) {
            // TODO: complete this method.
            var area = circle.getArea();

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding) {
                area = Math.round(area);
            }
            console.log("Area of circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    };

    // log info about the circle
    console.log("Raw circle information:");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number:");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5; // changing the radius to 5 by calling "circle.radius"
    // log info about the circle
    console.log("Raw circle information:");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number:");
    circle.logInfo(true);

    console.log("=======================================================");
    // testing on my own changing radius to 10.
    circle.radius = 10;
    // log info about the circle
    console.log("Raw circle information:");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number:");
    circle.logInfo(true);
})();