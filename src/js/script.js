"use strict";

$(document).ready(function () {

    // __________HAMBURGER__________
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

    // __________Typed.js__________
    const typed = new Typed('#typed', {
        strings: [
            'My name is <strong>Sashko</strong>',
            'I\'m Junior Front-End<br>Web Developer',
            'Love to learn<br>something <strong>NEW</strong>!'
        ],
        typeSpeed: 80,
        backSpeed: 30,
        smartBackspace: true,
        loop: true
    });

    // __________TABS__________
    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.education__click').eq(i).toggleClass('education__click_active');
                $('.education__certificate').eq(i).toggleClass('education__certificate_active');
            });
        });
    }

    toggleSlide('.next');
    toggleSlide('.back');


    // __________Scroll__________
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1200) {
            $('.arrow').fadeIn();
        } else {
            $('.arrow').fadeOut();
        }
    });

    $('a[href^="#"]').bind("click", function (e) {
        const anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr("href")).offset().top
        }, 1000);
        e.preventDefault();
    });


    // __________Fancybox__________
    $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        buttons: [
            "close"
        ],
        animationEffect: "zoom-in-out",
        transitionEffect: "tube",
        transitionDuration: 600,
    });

    const wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: false,       // default
            live: true        // default
        });
    wow.init();
});
