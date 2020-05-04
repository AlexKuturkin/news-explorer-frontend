import '../secondary/secondary.css';

const openHamburger = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__nav");

openHamburger.addEventListener("click", function () {
    menu.classList.add("header__nav_hamburger", "header__nav_hamburger-grey");
    // menu.classList.add("header__nav_hamburger-grey");
    // closeHamburger.classList.add("header__hamburger_open");
    changeHamburger.open();
});


import Hamburger from '../js/components/hamburger';
const closeHamburger = document.querySelector(".header__hamburger_close");
const changeHamburger = new Hamburger(closeHamburger);

closeHamburger.addEventListener("click", function () {
    menu.classList.remove("header__nav_hamburger", "header__nav_hamburger-grey");
    // menu.classList.remove("header__nav_hamburger-grey");
    // closeHamburger.classList.remove("header__hamburger_open");
    changeHamburger.close();
});