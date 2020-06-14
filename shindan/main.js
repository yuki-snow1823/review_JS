(function () {
  "use strict";

  var cards = document.getElementById("cards");
  var check = document.getElementById("check");
  var retry = document.getElementById("retry");

  check.addEventListener("click", function () {
    let msg = [
      "究極の進化を遂げた",
      "究極の退化を遂げた",
      "究極のアレを遂げた",
    ];
    // 連想配列
    let jobs = [{
        name: "勇者",
        img: "/shindan/shindan_js_v3/MyChecker/img/hero.gif"
      },
      {
        name: "魔法使い",
        img: "/shindan/shindan_js_v3/MyChecker/img/wizard.gif"
      },
      {
        name: "武道家",
        img: "/shindan/shindan_js_v3/MyChecker/img/fighter.gif"
      }
    ]
    let types = [{
        name: "神の炎",
        img: "bg-fire"
      },
      {
        name: "神の水",
        img: "bg-water",
      },
      {
        name: "神の雷",
        img: "bg-thunder",
      },
    ];
    function getRandomElement(arr) {
      return arr[Math.floor(Math.random() * array.length)];
    }
    cards.className = "move";
  });

  retry.addEventListener("click", function () {
    cards.className = "";
  });
})();
