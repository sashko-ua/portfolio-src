'use strict'

// ----------SLICK-SLIDER----------
$('.intro').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow_left_white.svg" alt="arrow_left_white"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow_right_white.svg" alt="arrow_right_white"></button>',
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});