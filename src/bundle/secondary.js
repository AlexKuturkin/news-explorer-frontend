import "../secondary/secondary.css";

import Hamburger from "../js/components/hamburger";

import MainApi from "../js/api/mainApi";
import { BASE_URL } from "../js/constants/api";
import { ERROR_PLUS_INTERNET } from "../js/constants/texts";

import TextMessage from "../js/components/textMessage";
import redirect from "../js/utils/redirect";

const openHamburger = document.querySelector(".header__toggle");
const menu = document.querySelector(".header__nav");

const closeHamburger = document.querySelector(".header__hamburger_close");
const changeHamburger = new Hamburger(closeHamburger);

openHamburger.addEventListener("click", () => {
  menu.classList.add("header__nav_hamburger", "header__nav_hamburger-grey");
  changeHamburger.open();
});

closeHamburger.addEventListener("click", () => {
  menu.classList.remove("header__nav_hamburger", "header__nav_hamburger-grey");
  changeHamburger.close();
});
const changeMainApi = new MainApi(BASE_URL);
const userName = document.querySelector(".user-name");
const changeTextMessageNameUser = new TextMessage(userName);

changeMainApi
  .me()
  .then((res) => {
    if (res.statusCode !== 400) {
      changeTextMessageNameUser.set(res.name);
    } else {
      redirect("../index.html");
    }
  })
  .catch((err) => {
    console.log(err);
  });

const logoutIcon = document.querySelector(".header__button-logout");

logoutIcon.addEventListener("click", () => {
  changeMainApi
    .logout()
    .then((res) => {
      redirect("../index.html");
    })
    .catch((err) => {
      console.log(err);
      // eslint-disable-next-line no-alert
      alert(ERROR_PLUS_INTERNET);
    });
});
