function menu() {
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
}

export default menu;