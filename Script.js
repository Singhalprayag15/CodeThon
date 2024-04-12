let hamburder = document.getElementById("hamburger");
let navItem = document.getElementById("navItem");
let cross = document.getElementById("cross");
let color = document.getElementById("color");
let home_bg = document.getElementById("home_bg");

let colorChange = document.getElementById("colorChange");
let body = document.getElementById("body");

let count = 0;

hamburder.addEventListener("click", () => {
  navItem.style.display = "inline";
  cross.style.display = "inline";
  hamburder.style.display = "none";
});

cross.addEventListener("click", () => {
  navItem.style.display = "none";
  hamburder.style.display = "inline";
  cross.style.display = "none";
});

color.addEventListener("click", () => {
  if (count == 0) {
    home_bg.style.backgroundColor = "black";
    home_bg.style.color = "white";
    count = 1;
  } else {
    home_bg.style.backgroundColor = "white";
    home_bg.style.color = "black";
    count = 0;
  }
});
