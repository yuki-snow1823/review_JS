'use strict';

{
  document.querySelector("button").addEventListener("click", () => {
    const colors = document.querySelectorAll("input");
    // 値の保持
    let selectedColor;

    // colorsに対してroop処理
    colors.forEach((color) => {
      // 要素がチェックされているか（ラジオぼたん）
      if (color.checked === true) {
        selectedColor = color.value;
      }
    });

    const li = document.createElement("li");
    li.textContent = selectedColor;
    document.querySelector("ul").appendChild(li);
  });
}
