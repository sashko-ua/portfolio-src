function changeColorOfTheSidepanel() {
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
}

export default changeColorOfTheSidepanel;