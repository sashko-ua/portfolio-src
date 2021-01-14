'use strict';

// ----------Hamburger----------

const hamburgerWrapper = document.querySelector('.hamburger__wrapper'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.close'),
    overlay = document.querySelector('.menu__overlay'),
    links = document.querySelectorAll('.menu__link'),
    social = document.querySelector('.menu__social');

hamburgerWrapper.addEventListener('click', () => {
    menu.classList.add('menu--active');
});

close.addEventListener('click', () => {
    menu.classList.remove('menu--active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('menu--active');
});

links.forEach(e => {
    e.addEventListener('click', () => {
        menu.classList.remove('menu--active');
    });
});

social.addEventListener('click', () => {
    menu.classList.remove('menu--active');
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

const form = document.querySelector('.contacts__form'),
    loading = document.querySelector('.contacts'),
    modalDone = document.querySelector('.modalDone'),
    modalErr = document.querySelector('.modalErr');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if (error === 0) {
        loading.classList.add('sending');
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            let result = await response.json();
            form.reset();
            loading.classList.remove('sending');
            modalDone.style.display = 'block';
        } else {
            loading.classList.remove('sending');
            modalErr.style.display = 'block';
        }
    }
});

function formValidate(form) {
    const formReq = document.querySelectorAll('._required');
    let error = 0;

    for (let i = 0; i < formReq.length; i++) {
        const input = formReq[i];
        formRemoveError(input);

        if (input.classList.contains('email')) {
            if (emailTest(input)) {
                formAddError(input);
                error++;
            }
        }

        if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
            formAddError(input);
            error++;
        }

        if (input.value === '') {
            formAddError(input);
            error++;
        }
    }

    return error;
}

function formAddError(input) {
    input.classList.add('error');
}

function formRemoveError(input) {
    input.classList.remove('error');
}

function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
}

// ----------Modal----------

const modalDoneClose = document.querySelector('.modal__closeDone'),
    modalErrClose = document.querySelector('.modal__closeErr');

modalDoneClose.addEventListener('click', () => {
    modalDone.style.display = 'none';
});

modalErrClose.addEventListener('click', () => {
    modalErr.style.display = 'none';
});

// ----------TipingText----------

const typed = new Typed('.typed', {
    strings: ['^1000 My name is Oleksandr ^300 <br> <span class="subtitle main__subtitle">I am Junior Front-End Developer</span>'],
    typeSpeed: 15,
    showCursor: false,
});

// ----------AnimationDelayMain----------

const sidepanel = document.querySelector('.sidepanel'),
    mainBTNS = document.querySelector('.main__btns');

setInterval(() => {
    hamburger.classList.add('hamburger--active');
    sidepanel.classList.add('sidepanel--active');
    mainBTNS.classList.add('main__btns--active')
}, 3000);

// ----------WOW-JS----------

new WOW().init();