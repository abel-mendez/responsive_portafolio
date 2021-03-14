const menu = document.querySelector(".menu");
const burgerButton = document.querySelector(".burger-button");
const screen = window.matchMedia("screen and (max-width: 767px)");
function showHide() {
  menu.classList.toggle("is-active");
}
/*function showHide() {
    if (menu.classList.contains("is-active")) {
        menu.classList.remove("is-active");
    } else {
    menu.classList.add("is-active");
    }
}*/
function hide() {
  menu.classList.remove("is-active");
}
if (screen.matches) {
  burgerButton.addEventListener("click", showHide);
  menu.addEventListener("click", hide);
}
screen.addListener(validation);
function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", showHide);
    menu.addEventListener("click", hide);
  } else {
    burgerButton.removeEventListener("click", showHide);
    menu.removeEventListener("click", hide);
  }
}
