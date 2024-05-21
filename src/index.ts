const navBtn = document.querySelector('.nav-btn') as HTMLButtonElement;
const loaderScreen = document.querySelector('.loader-screen') as HTMLElement;

navBtn.addEventListener('click', showNav);
window.addEventListener('load', () => loaderScreen.classList.add('hide'));

function showNav({target}: MouseEvent) {
  let btn = (target as HTMLElement).closest('button') as HTMLButtonElement;
  if (btn != navBtn) return;
  let isFalse = btn.getAttribute('aria-expanded') == 'false';

  if (isFalse) {
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.setProperty('overflow', 'hidden');
  } else {
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.removeProperty('overflow');
  }
}

