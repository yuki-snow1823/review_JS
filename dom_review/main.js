'use strict';

{
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();// ページ遷移の拒否
    console.log(e);
    console.log("submit");
  });
}
