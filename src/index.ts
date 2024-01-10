const navBtn = document.querySelector('.nav-btn') as HTMLButtonElement;
navBtn.addEventListener('click', showNav);

function showNav({target}: MouseEvent) {
  let btn = target as HTMLButtonElement;
  let isFalse = btn.getAttribute('aria-expanded') == 'false';

  if (isFalse) {
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.setProperty('overflow', 'hidden');
  } else {
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.removeProperty('overflow');
  }
}

