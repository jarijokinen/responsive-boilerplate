'use strict';

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const toggable = document.querySelector('header nav');
    const div = document.createElement('div');
    div.appendChild(document.createElement('span'));
    div.appendChild(document.createElement('span'));
    div.appendChild(document.createElement('span'));
    div.onclick = function () {
      this.parentNode.classList.toggle('on');
    };
    return toggable.appendChild(div);
  }, false);
}).call(this);
