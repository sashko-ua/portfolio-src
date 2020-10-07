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

// ----------ChangeColorForHamburger+Sidepanel----------

const hamburgerSpans = document.querySelectorAll('.hamburger span'),
    sidepanel = document.querySelectorAll('.sidepanel__link'),
    divider = document.querySelector('.sidepanel__divider'),
    sidepanelText = document.querySelector('.sidepanel__text');

window.addEventListener('scroll', () => {
    if (pageYOffset > document.documentElement.clientHeight * .7) {
        sidepanel.forEach(element => {
            element.classList.add('blackColor');
        });

        divider.classList.add('blackBG');

        sidepanelText.style.color = '#000';
    } else {
        sidepanel.forEach(element => {
            element.classList.remove('blackColor');
        });

        divider.classList.remove('blackBG');

        sidepanelText.style.color = '#fff';
    }

    if (pageYOffset > document.documentElement.clientHeight) {
        hamburgerSpans.forEach(element => {
            element.classList.add('black');
        });
    } else {
        hamburgerSpans.forEach(element => {
            element.classList.remove('black');
        });
    }
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