'use strict';

// ----------Hamburger----------

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.close'),
    overlay = document.querySelector('.menu__overlay'),
    links = document.querySelectorAll('.menu__link'),
    social = document.querySelector('.menu__social');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

close.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

links.forEach(e => {
    e.addEventListener('click', () => {
        menu.classList.remove('menu_active');
    });
});

social.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

// ----------SkillsAutoPercent----------

const counters = document.querySelectorAll('.skills__percent-box-value'),
    lines = document.querySelectorAll('.skills__percent-progress-value');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

// ----------Smooth Scrolling----------
const anchors = document.querySelectorAll('a[href^="#"]');


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