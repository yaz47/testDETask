'use strict';

(function () {
  const scrollElem = document.querySelector('.scroll');
  const footerElem = document.querySelector('.footer');
  const scrollLimit = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  ) * 0.2;
  const windowHeight = document.documentElement.clientHeight;

  function onScroll() {
    const scrollFooter = footerElem.offsetTop - windowHeight;
    if (window.pageYOffset > scrollLimit) {
      scrollElem.classList.add('scroll--visible');
    } else {
      scrollElem.classList.remove('scroll--visible');
    }

    if (window.pageYOffset > scrollFooter) {
      scrollElem.classList.add('scroll--stable');
      scrollElem.style.bottom = footerElem.offsetHeight + 'px';
    } else {
      scrollElem.classList.remove('scroll--stable');
      scrollElem.style.bottom = '5vh';
    }
  }

  function onClick() {
    window.scrollTo(0, 0);
    scrollElem.classList.remove('scroll--stable');
    scrollElem.classList.remove('scroll--visible');
  }

  if (scrollElem && footerElem) {
    document.addEventListener('scroll', onScroll);
    scrollElem.addEventListener('click', onClick);
  }
}());
