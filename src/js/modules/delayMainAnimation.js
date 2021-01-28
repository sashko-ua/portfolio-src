function delayMainAnimation() {
    const sidepanel = document.querySelector('.sidepanel'),
        mainBTNS = document.querySelector('.main__btns'),
        hamburger = document.querySelector('.hamburger');

    setInterval(() => {
        hamburger.classList.add('hamburger--active');
        sidepanel.classList.add('sidepanel--active');
        mainBTNS.classList.add('main__btns--active')
    }, 3000);
}

export default delayMainAnimation;