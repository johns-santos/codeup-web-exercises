$(document).ready(function () {

    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px'
    });


    /* Scroll on buttons */
    $('.js--scroll-to-features').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });

    $('.js--scroll-to-form').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 3000)
    });

    $('.--js-scroll-to-form2').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 2000)
    });


    /* Animation on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__fadeIn','8s');
    }, {
        offset: '50%'
    });


    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animate__fadeInUp', '8s');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__bounceIn');
    }, {
        offset: '50%'
    });


});