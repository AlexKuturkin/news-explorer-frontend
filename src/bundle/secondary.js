import '../secondary/secondary.css';

const openHamburger = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__nav");

openHamburger.addEventListener("click", function () {
    menu.classList.add("header__nav_hamburger", "header__nav_hamburger-grey");
    changeHamburger.open();
});


import Hamburger from '../js/components/hamburger';
const closeHamburger = document.querySelector(".header__hamburger_close");
const changeHamburger = new Hamburger(closeHamburger);

closeHamburger.addEventListener("click", function () {
    menu.classList.remove("header__nav_hamburger", "header__nav_hamburger-grey");
    changeHamburger.close();
});

import MainApi from '../js/api/mainApi';
import { BASE_URL } from '../js/constants/api';
const changeMainApi = new MainApi(BASE_URL);

import TextMessage from '../js/components/textMessage';
const userName = document.querySelector(".user-name");
const changeTextMessageNameUser = new TextMessage(userName);

changeMainApi.me()
    .then(res => {
        if (res.statusCode !== 400) {
            changeTextMessageNameUser.set(res.name);
        }
    })
    .catch(err => {
        console.log(err)
    });