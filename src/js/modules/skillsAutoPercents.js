function skillsAutoPercents() {
    const counters = document.querySelectorAll('.skills__percent-box-value'),
        lines = document.querySelectorAll('.skills__percent-progress-value');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });

}

export default skillsAutoPercents;