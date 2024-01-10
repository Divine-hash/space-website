"use strict";
const tablist = document.getElementById('tablist');
const tabContents = document.querySelector('.tab-contents');
const tabImages = document.querySelector('[data-id="tab-images"]');
;
tablist.addEventListener('click', onClickEvent);
tablist.addEventListener('keydown', onkeydownEvent);
function onClickEvent(event) {
    let newTab = event.target;
    if (newTab.tagName != 'BUTTON')
        return;
    let tabs = tablist.querySelectorAll('.tab-btn, .disc-tab-btn, .numbered-tab-btn');
    let tabContentList = tabContents.querySelectorAll('.tab-content');
    let tabImagesList = tabImages.querySelectorAll('.tab-image');
    changeTab(newTab, tabs);
    changeTabDisplay({
        item: newTab.getAttribute('aria-controls'),
        elemParent: tabContents,
        elemList: tabContentList
    });
    changeTabDisplay({
        item: newTab.getAttribute('aria-controls'),
        elemParent: tabImages,
        elemList: tabImagesList
    });
}
function changeTab(newTab, tabs) {
    tabs.forEach((tab) => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
        tab.setAttribute('tabindex', '-1');
    });
    newTab.classList.add('active');
    newTab.setAttribute('aria-selected', 'true');
    newTab.setAttribute('tabindex', '0');
}
function changeTabDisplay({ item, elemParent, elemList }) {
    let newContent = elemParent.querySelector(`[data-item="${item}"]`);
    elemList.forEach((content) => content.classList.add('hidden'));
    newContent === null || newContent === void 0 ? void 0 : newContent.classList.remove('hidden');
}
function onkeydownEvent(event) {
    let target = event.target;
    if (target.tagName != 'BUTTON')
        return;
    if (event.code == 'ArrowRight') {
        arrowRight(target, this);
    }
    else if (event.code == 'ArrowLeft') {
        arrowLeft(target, this);
    }
}
function arrowRight(target, parentElem) {
    let nextSibliing = target.nextElementSibling;
    if (!nextSibliing) {
        parentElem.firstElementChild.focus();
        return;
    }
    nextSibliing.focus();
}
function arrowLeft(target, parentElem) {
    let prev = target.previousElementSibling;
    if (!prev) {
        parentElem.lastElementChild.focus();
        return;
    }
    prev.focus();
}
