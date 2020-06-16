"use strict";

{
  document.querySelector("button").addEventListener("click", () => {
    const targetNode = document.getElementById("target");

    // targetNode.className = 'my-color';
    // 元の名前も追加しないといけない
    targetNode.classList.add("my-color");
  });
}
