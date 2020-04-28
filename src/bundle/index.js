import '../index.css';

const openGamburger = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__nav");
const closeGamburger = document.querySelector(".header__hamburger_close");

openGamburger.addEventListener("click", function () {
    menu.classList.add("header__nav_gamburger");
    menu.classList.add("header__nav_gamburger-black");
    closeGamburger.classList.add("header__hamburger_open");
});

closeGamburger.addEventListener("click", function () {
    menu.classList.remove("header__nav_gamburger");
    menu.classList.remove("header__nav_gamburger-black");
    closeGamburger.classList.remove("header__hamburger_open");
});