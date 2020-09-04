"use strict";

window.addEventListener('DOMContentLoaded', () => {
    // __________SCROLLING ARROW__________
    const arrowUP = document.querySelector('.arrow-up');

    arrowUP.addEventListener('click', () => {
        window.scrollTo(pageYOffset, 1500);
    })

    window.addEventListener('scroll', () => {
        arrowUP.hidden = (pageYOffset < document.documentElement.clientHeight);
    });

    // __________SMOOTH SCROLLING__________
    const anchors = document.querySelectorAll('a.scroll-to')

    SmoothScrolling(anchors);

    function SmoothScrolling(element) {
        for (let anchor of element) {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();

                const blockID = anchor.getAttribute('href')

                document.querySelector(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            })
        }
    }

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

    // // __________POPUP__________
    // $('.image-link').magnificPopup({
    //     type: 'image',
    //     gallery: {
    //         enabled: true,
    //     },
    //     zoom: {
    //         enabled: true,
    //         duration: 400,
    //         easing: 'ease-in-out',
    //     },
    //     closeBtnInside: false,
    //     closeOnBgClick: false
    // });

    // __________Tab__________
    const btn = document.querySelector('.tab__indicators'),
        item = document.querySelectorAll('.tab__item'),
        indicators = document.querySelectorAll('.tab__indicator');

    btn.addEventListener('click', () => {
        item.forEach(e => e.classList.toggle('tab__item_active'));

        indicators.forEach(e => e.classList.toggle('tab__indicator_active'));
    });
});