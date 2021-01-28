function modal() {
    const modalDoneClose = document.querySelector('.modal__closeDone'),
        modalErrClose = document.querySelector('.modal__closeErr');

    modalDoneClose.addEventListener('click', () => {
        modalDone.style.display = 'none';
    });

    modalErrClose.addEventListener('click', () => {
        modalErr.style.display = 'none';
    });
}

export default modal;