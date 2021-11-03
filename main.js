const nav = document.querySelector("nav");

// media query event handler
if (matchMedia) {
    // console.log(window.matchMedia("(min-width: 768px)"));
    const mq = window.matchMedia("(min-width: 768px)");
    mq.addEventListener('change', WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {
    if (mq.matches) {
        // window width is at least 768px

        nav.classList.remove('fixed-bottom');
        nav.classList.add('sticky-top');
    } else {
        // window width is less than 768px

        nav.classList.add('fixed-bottom');
        nav.classList.remove('sticky-top');
    }

}

