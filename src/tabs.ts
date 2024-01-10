const tablist = document.getElementById('tablist') as HTMLDivElement;
const tabContents = document.querySelector('.tab-contents') as HTMLDivElement;
const tabImages = document.querySelector('.tab-images') as HTMLDivElement;

interface TabProps {
  item: string,
  elemParent: HTMLDivElement,
  elemList: NodeListOf<HTMLDivElement>
};

tablist.addEventListener('click', onClickEvent);
tablist.addEventListener('keydown', onkeydownEvent);

function onClickEvent(event: MouseEvent) {
  let newTab = event.target as HTMLButtonElement;
  if (newTab.tagName != 'BUTTON') return;

  let tabs = tablist.querySelectorAll('.tab-btn, .disc-tab-btn') as NodeListOf<HTMLButtonElement>;
  let tabContentList = tabContents.querySelectorAll('.tab-content') as NodeListOf<HTMLDivElement>;
  let tabImagesList = tabImages.querySelectorAll('.tab-image') as NodeListOf<HTMLDivElement>;

  changeTab(newTab, tabs);
  changeTabDisplay({
    item: newTab.getAttribute('aria-controls') as string,
    elemParent: tabContents,
    elemList: tabContentList
  });

  changeTabDisplay({
    item: newTab.getAttribute('aria-controls') as string,
    elemParent: tabImages,
    elemList: tabImagesList
  });
}

function changeTab(newTab: HTMLButtonElement, tabs: NodeListOf<HTMLButtonElement>) {
  tabs.forEach((tab) => {
    tab.classList.remove('active');
    tab.setAttribute('aria-selected', 'false');
    tab.setAttribute('tabindex', '-1')
  });
  newTab.classList.add('active');
  newTab.setAttribute('aria-selected', 'true');
  newTab.setAttribute('tabindex', '0');
}

function changeTabDisplay({item, elemParent, elemList}: TabProps) {
  let newContent = elemParent.querySelector(`[data-item="${item}"]`);
  elemList.forEach((content) => content.classList.add('hidden'));
  newContent?.classList.remove('hidden');
}

function onkeydownEvent(this:HTMLDivElement, event: KeyboardEvent) {
  let target = event.target as HTMLButtonElement;
  if (target.tagName != 'BUTTON') return;

  if (event.code == 'ArrowRight') {
    arrowRight(target, this);
  } else if (event.code == 'ArrowLeft') {
    arrowLeft(target, this);
  }
}

function arrowRight(target: HTMLButtonElement, parentElem: HTMLDivElement) {
  let nextSibliing = target.nextElementSibling as HTMLButtonElement;
  if (!nextSibliing) {
    (parentElem.firstElementChild as HTMLButtonElement).focus();
    return;
  }
  nextSibliing.focus();
}

function arrowLeft(target: HTMLButtonElement, parentElem: HTMLDivElement) {
  let prev = target.previousElementSibling as HTMLButtonElement;
  if (!prev) {
    (parentElem.lastElementChild as HTMLButtonElement).focus();
    return;
  }
  prev.focus();
}