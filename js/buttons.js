var Buttons = (function () {
  let home = document.querySelector("#home");
  home.addEventListener("click", function () {
    location.reload();
  });
  let github = document.querySelector("#github");

  github.addEventListener("click", function () {
    window.open("https://github.com/Natrexq");
  });
})();
