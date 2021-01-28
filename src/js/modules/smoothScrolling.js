function smoothScrolling() {
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
}

export default smoothScrolling;