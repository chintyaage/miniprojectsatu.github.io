let originalIcon;

function changeIcon() {
  let iconElement = document.getElementById("icon");
  originalIcon = iconElement.name;
  iconElement.name = (originalIcon == "moon") ? "sunny" : "moon";
}

var nav = document.querySelector("nav");
var darkToggle = document.querySelector(".darkToggle");
var body = document.querySelector("body");
var header = document.querySelector("header");
var footer = document.querySelector("footer");
var cards = document.querySelectorAll(".card, .card2");
var button = document.querySelector(".contactBtn");

darkToggle.addEventListener("click", () => {
  nav.classList.toggle("darkNav");
  body.classList.toggle("darkBody");
  header.classList.toggle("darkHeader");
  footer.classList.toggle("darkFooter");
  button.classList.toggle("darkButton");
  cards.forEach(card => card.classList.toggle("darkCard"));

  changeIcon();
});

var moreSantorini = document.getElementById("santorini");

moreSantorini.addEventListener("click", () => {
   window.open("santorini.html");
});

var moreBali = document.getElementById("bali");

moreBali.addEventListener("click", () => {
   window.open("bali.html");
});

var moreBanff = document.getElementById("banff");

moreBanff.addEventListener("click", () => {
   window.open("banff.html");
});

var morePositano = document.getElementById("positano");

morePositano.addEventListener("click", () => {
   window.open("positano.html");
});