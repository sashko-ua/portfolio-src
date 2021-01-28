function form() {
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
}

export default form;