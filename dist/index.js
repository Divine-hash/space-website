"use strict";
const navBtn = document.querySelector('.nav-btn');
const loaderScreen = document.querySelector('.loader-screen');
navBtn.addEventListener('click', showNav);
window.addEventListener('load', () => loaderScreen.classList.add('hide'));
function showNav({ target }) {
    let btn = target.closest('button');
    if (btn != navBtn)
        return;
    let isFalse = btn.getAttribute('aria-expanded') == 'false';
    if (isFalse) {
        btn.setAttribute('aria-expanded', 'true');
        document.body.style.setProperty('overflow', 'hidden');
    }
    else {
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.removeProperty('overflow');
    }
}
