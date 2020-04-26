import '../secondary/secondary.css';

const openGamburger = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__nav");

openGamburger.addEventListener("click", function () {
    menu.classList.add("header__nav_gamburger");
    menu.classList.add("header__nav_gamburger-grey");
});