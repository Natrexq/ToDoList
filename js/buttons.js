var Buttons = (function () {
  let home = document.querySelector("#home");
  home.addEventListener("click", function () {
    location.reload();
  });
  let github = document.querySelector("#github");

  github.addEventListener("click", function () {
    window.open("https://github.com/Natrexq");
  });

  var soonv = function () {
    alert("Soon..");
  };
  let insta = document.querySelector("#insta");
  let fb = document.querySelector("#facebook");
  insta.addEventListener("click", function () {
    soonv();
  });
  fb.addEventListener("click", function () {
    soonv();
  });
})();
