(function () {
  "use strict";

  var cards = document.getElementById("cards");
  var check = document.getElementById("check");
  var retry = document.getElementById("retry");
  var userName = document.getElementById('user_name');
  userName.focus();

  check.addEventListener("click", function () {
    let msgs = [
      "究極の進化を遂げた",
      "究極の退化を遂げた",
      "究極のアレを遂げた",
    ];
    // 連想配列
    let jobs = [{
        name: "勇者",
        img: "./shindan_js_v3/MyChecker/img/hero.gif"
      },
      {
        name: "魔法使い",
        img: "./shindan_js_v3/MyChecker/img/wizard.gif"
      },
      {
        name: "武道家",
        img: "./shindan_js_v3/MyChecker/img/fighter.gif"
      }
    ]
    var types = [{
        name: "その炎はすべてを焼き尽くす",
        img: "bg-fire"
      },
      {
        name: "その清水ですべてを浄化する",
        img: "bg-water"
      },
      {
        name: "その雷撃は万物の怒りを鎮める",
        img: "bg-thunder"
      },
    ];

    var msg;
    var job;
    var type;

    var resultImg = document.getElementById("result_img");

    function getRandomElement(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    function setTextContent(id, text) {
      document.getElementById(id).textContent = text;
    }
    if (userName.value === '' || userName.value.length > 10) {
      userName.value = '名無し';
    }
    
    msg = getRandomElement(msgs);
    job = getRandomElement(jobs);
    type = getRandomElement(types);

    // メッセージの表示
    setTextContent("result_name", userName.value);
    setTextContent("result_msg", msg);
    setTextContent("result_job", job.name);
    // 一番最初の要素
    resultImg.children[0].src = job.img;
    setTextContent("result_type", type.name);


    resultImg.className = "left-side " + type.img;
    cards.className = "move";
  });

  retry.addEventListener("click", function () {
    userName.value = "";
    userName.focus();
    cards.className = "";
  });
})();
