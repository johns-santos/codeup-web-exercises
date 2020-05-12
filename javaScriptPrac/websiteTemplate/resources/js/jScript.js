$(document).ready(function () {

    /* === waypoint for sticky-nav bar EXAMPLE */
    // var waypoints = $('#handler-first').waypoint(function(direction) {
    //     notify(this.element.id + ' hit 25% from top of window')
    // }, {
    //     offset: '25%'
    // })
    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky')
        }
    }, { offset: '60px'
    });


    /* Scroll on buttons */
    $('.js--scroll-to-features').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });

    $('.js--scroll-to-form').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 3000)
    });

    $('.--js-scroll-to-form2').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 2000)
    });
});



// section-form