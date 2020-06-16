'use strict';

{
  // e引数があるから()を消した
  document.querySelector('ul').addEventListener('click', e => {
    if (e.target.nodeName === "LI") {
      e.target.classList.toggle('done'); // つけ外し
    }
  });
}
