'use strict';

// ----------Hamburger----------

const hamburgerWrapper = document.querySelector('.hamburger__wrapper'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.close'),
    overlay = document.querySelector('.menu__overlay'),
    links = document.querySelectorAll('.menu__link'),
    social = document.querySelector('.menu__social');

hamburgerWrapper.addEventListener('click', () => {
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

const hamburger = document.querySelector('.hamburger'),
    hamburgerSpans = document.querySelectorAll('.hamburger span'),
    sidepanelLink = document.querySelectorAll('.sidepanel__link'),
    divider = document.querySelector('.sidepanel__divider'),
    sidepanelText = document.querySelector('.sidepanel__text');

window.addEventListener('scroll', () => {
    (pageYOffset > document.documentElement.clientHeight * .2) ? sidepanelText.style.color = '#000': sidepanelText.style.color = '#fff';

    (pageYOffset > document.documentElement.clientHeight * .5) ? divider.classList.add('blackBG'): divider.classList.remove('blackBG');

    if (pageYOffset > document.documentElement.clientHeight * .6) {
        sidepanelLink.forEach(element => {
            element.classList.add('blackColor');
        });
    } else {
        sidepanelLink.forEach(element => {
            element.classList.remove('blackColor');
        });
    }

    if (pageYOffset > document.documentElement.clientHeight) {
        hamburgerSpans.forEach(element => {
            element.classList.add('black');
        });

        hamburger.classList.add('hamburger_blackBG');
    } else {
        hamburgerSpans.forEach(element => {
            element.classList.remove('black');
        });

        hamburger.classList.remove('hamburger_blackBG');
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
};


// ----------Form----------

$('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: 'smart.php',
        data: $(this).serialize()
    }).done(function () {
        $(this).find('input').val('');

        $('.modal').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});


// ----------Modal----------

const modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});