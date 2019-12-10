(function() {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    console.log(planetsString);
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    var backToString = planetsArray.join('<br>');
    console.log(backToString);

    /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var planetsUl = "<ul>";
    planetsArray.forEach(function (planets) {
        planetsUl += "<li>" + planets + "</li>";
    })
    planetsUl += "</ul>";

    console.log(planetsUl);
    document.getElementById("planets").innerHTML = planetsUl;


})();