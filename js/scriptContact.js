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
var message = document.querySelector(".boxMessage");
var button = document.querySelector(".submitBtn");


darkToggle.addEventListener("click", () => {
    nav.classList.toggle("darkNav");
    body.classList.toggle("darkBody");
    header.classList.toggle("darkHeader");
    message.classList.toggle("darkMessage");
    button.classList.toggle("darkButton");
});

button.addEventListener("click", () => {
  if (confirm("Are you sure to send your message?")) {
    alert("Thank you for contacting us. Our team will respond promptly and assist you with any needs you may have.");
  }
});