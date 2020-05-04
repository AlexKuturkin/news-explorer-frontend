import '../index.css';

const menu = document.querySelector(".header__nav");


const regButton = document.querySelector(".header__button");
regButton.addEventListener("click", function () {
    menu.classList.remove("header__nav_hamburger", "header__nav_hamburger-black");
    // menu.classList.remove("header__nav_hamburger-black");
    // closeHamburger.classList.remove("header__hamburger_open");
    changeHamburger.close();
    changePopupReg.open();
    // popupReg.classList.add("popup_open");
    // openHamburger.classList.add("header__toggle_hide");
    changeHamburgerToggle.disactivate();
});

const authButton = document.querySelector(".enter-button");
authButton.addEventListener("click", function () {
    // popupReg.classList.remove("popup_open");
    changePopupReg.close();
    // popupEnter.classList.add("popup_open");
    changePopupEnter.open();
});


const regButtonFromPopup = document.querySelector(".popup__advice-link_big");
regButtonFromPopup.addEventListener("click", function () {
    //popupEnter.classList.remove("popup_open");
    changePopupEnter.close();
    changePopupReg.open();
    // popupReg.classList.add("popup_open");
});


const closePopup = document.querySelector(".popup__button-close");
closePopup.addEventListener("click", function () {
    // popupEnter.classList.remove("popup_open");
    changePopupEnter.close();
    // popupReg.classList.remove("popup_open");
    changePopupReg.close();
    // openHamburger.classList.remove("header__toggle_hide");
    changeHamburgerToggle.activate();
});


const enterClosePopup = document.querySelector(".enter-close");
enterClosePopup.addEventListener("click", function () {
    // popupEnter.classList.remove("popup_open");
    changePopupEnter.close();
    // popupReg.classList.remove("popup_open");
    changePopupReg.close();
    // openPopupSuccess.classList.remove("popup_open");
    // openHamburger.classList.remove("header__toggle_hide");
    changeHamburgerToggle.activate();
});


const openPopupSuccess = document.querySelector(".popup__button-reg-enter");
openPopupSuccess.addEventListener("click", function () {
    // popupEnter.classList.remove("popup_open");
    changePopupEnter.close()
    changePopupReg.close()
    // popupReg.classList.remove("popup_open");
    // popupSuccess.classList.add("popup_open");
    changePopupSuccess.open();
});


const successClosePopup = document.querySelector(".success-close");
successClosePopup.addEventListener("click", function () {
    // popupSuccess.classList.remove("popup_open");
    changePopupSuccess.close();
    // popupEnter.classList.remove("popup_open");
    changePopupEnter.close();
    // popupReg.classList.remove("popup_open");
    changePopupReg.close();
    // openHamburger.classList.remove("header__toggle_hide");
    changeHamburgerToggle.activate();
});


const enterFromSuccess = document.querySelector(".enter-button-from-success");
enterFromSuccess.addEventListener("click", function () {
    changePopupSuccess.close();
    changePopupEnter.open();
});


import Popup from '../js/components/popup';
const popupReg = document.querySelector(".reg");
const changePopupReg = new Popup(popupReg);

const popupEnter = document.querySelector(".enter");
const changePopupEnter = new Popup(popupEnter);

const popupSuccess = document.querySelector(".success");
const changePopupSuccess = new Popup(popupSuccess);


import Hamburger from '../js/components/hamburger';
const closeHamburger = document.querySelector(".header__hamburger_close");
const changeHamburger = new Hamburger(closeHamburger);

closeHamburger.addEventListener("click", function () {
    menu.classList.remove("header__nav_hamburger", "header__nav_hamburger-black");
    // menu.classList.remove("header__nav_hamburger-black");
    // closeHamburger.classList.remove("header__hamburger_open");
    changeHamburger.close();
});

const openHamburger = document.querySelector(".header__toggle");
const changeHamburgerToggle = new Hamburger(openHamburger);
openHamburger.addEventListener("click", function () {
    menu.classList.add("header__nav_hamburger", "header__nav_hamburger-black");
    // menu.classList.add("header__nav_hamburger-black");
    // closeHamburger.classList.add("header__hamburger_open");
    changeHamburger.open();
});