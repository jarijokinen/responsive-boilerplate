'use strict';

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const scrollable = document.querySelector('body');
    window.onscroll = function () {
      const scroll = (window.pageYOffset !== undefined) ? window.pageYOffset : (
        document.documentElement || document.body.parentNode || document.body
      ).scroll;
      if (scroll > 50) {
        scrollable.classList.add('scrolling');
      }
      else {
        scrollable.classList.remove('scrolling');
      }
    };
  }, false);
}).call(this);
