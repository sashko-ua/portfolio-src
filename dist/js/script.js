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

    // __________TYPED.JS__________
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

    // __________POPUP__________
    $('.image-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
        },
        zoom: {
            enabled: true,
            duration: 400,
            easing: 'ease-in-out',
        },
        closeBtnInside: false,
        closeOnBgClick: false
    });

    // __________SCROLLING ARROW__________
    const arrowUP = document.getElementById('arrow-up');

    arrowUP.onclick = function () {
        window.scrollTo(pageXOffset, 1500);
    };

    window.addEventListener('scroll', function () {
        arrowUP.hidden = (pageYOffset < document.documentElement.clientHeight);
    });

    // __________SMOOTH SCROLLING__________
    const anchors = document.querySelectorAll('a.scroll-to')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href')

            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    // __________WOW__________
    const wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 300,
            mobile: true,
            live: true
        });
    wow.init();
});