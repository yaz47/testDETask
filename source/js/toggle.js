'use strict';

(function () {
  const headerElem = document.querySelector('.header');
  const toggleElem = headerElem.querySelector('.header__toggle');

  function onToggleClick() {
    toggleElem.classList.toggle('toggle--active');
    headerElem.classList.toggle('header--closed');
  }

  if (headerElem && toggleElem) {
    toggleElem.addEventListener('click', onToggleClick);

    onToggleClick();
  }
}());
