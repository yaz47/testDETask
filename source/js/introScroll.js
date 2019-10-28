'use strict';

(function () {
  const scrollElem = document.querySelector('.intro__scroll');
  const aboutElem = document.querySelector('.about');

  function onScrollClick() {
    aboutElem.scrollIntoView(true);
  }

  if (scrollElem && aboutElem) {
    scrollElem.addEventListener('click', onScrollClick);
  }
}());
