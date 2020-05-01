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


const popupReg = document.querySelector(".reg");
const regButton = document.querySelector(".header__button");

regButton.addEventListener("click", function () {
    menu.classList.remove("header__nav_gamburger");
    menu.classList.remove("header__nav_gamburger-black");
    closeGamburger.classList.remove("header__hamburger_open");
    popupReg.classList.add("popup_open");

    openGamburger.classList.add("header__toggle_hide");
});

const authButton = document.querySelector(".enter-button");
const popupEnter = document.querySelector(".enter");
authButton.addEventListener("click", function () {
    popupReg.classList.remove("popup_open");
    popupEnter.classList.add("popup_open");
});

const regButtonFromPopup = document.querySelector(".popup__advice-link_big");
regButtonFromPopup.addEventListener("click", function () {
    popupEnter.classList.remove("popup_open");
    popupReg.classList.add("popup_open");
});

const closePopup = document.querySelector(".popup__button-close");
closePopup.addEventListener("click", function () {
    popupEnter.classList.remove("popup_open");
    popupReg.classList.remove("popup_open");
    openGamburger.classList.remove("header__toggle_hide");
});

const enterClosePopup = document.querySelector(".enter-close");
enterClosePopup.addEventListener("click", function () {
    popupEnter.classList.remove("popup_open");
    popupReg.classList.remove("popup_open");
    openPopupSuccess.classList.remove("popup_open");
    openGamburger.classList.remove("header__toggle_hide");
});

const popupSuccess = document.querySelector(".success");
const openPopupSuccess = document.querySelector(".popup__button-reg-enter");
openPopupSuccess.addEventListener("click", function () {
    popupEnter.classList.remove("popup_open");
    popupReg.classList.remove("popup_open");
    popupSuccess.classList.add("popup_open");
});

const successClosePopup = document.querySelector(".success-close");
successClosePopup.addEventListener("click", function () {
    popupSuccess.classList.remove("popup_open");
    popupEnter.classList.remove("popup_open");
    popupReg.classList.remove("popup_open");
    openGamburger.classList.remove("header__toggle_hide");
});
