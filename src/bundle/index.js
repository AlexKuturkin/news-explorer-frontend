import '../index.css';

const menu = document.querySelector(".header__nav");

const authorizationButtonFromMenu = document.querySelector(".header__button");
authorizationButtonFromMenu.addEventListener("click", function () {
    if (authorizationButtonFromMenu.textContent === 'Авторизоваться') {
        menu.classList.remove("header__nav_hamburger", "header__nav_hamburger-black");
        changeHamburger.close();
        enterForm.reset();
        changeButton.inactiveButton(popupButtonEnter);
        changeTextMessageServerEnterError.clear();
        changePopupEnter.open();
        changeHamburgerToggle.disactivate();
    }
});

const enterLinkFromReg = document.querySelector(".enter-link");
enterLinkFromReg.addEventListener("click", function () {
    changePopupReg.close();
    changeTextMessageServerEnterError.clear();
    enterForm.reset();
    changeButton.inactiveButton(popupButtonEnter);
    changePopupEnter.open();
});


const authorizationLinkFromEnter = document.querySelector(".popup__advice-link_big");
authorizationLinkFromEnter.addEventListener("click", function () {
    changePopupEnter.close();
    regForm.reset();
    changeTextMessageServerRegError.clear();
    changeButton.inactiveButton(popupButtonReg);
    changePopupReg.open();
});


const closePopup = document.querySelector(".reg-close");
closePopup.addEventListener("click", function () {
    changePopupEnter.close();
    changePopupReg.close();
    changeHamburgerToggle.activate();
});


const enterClosePopup = document.querySelector(".enter-close");
enterClosePopup.addEventListener("click", function () {
    changePopupEnter.close();
    changePopupReg.close();
    changeHamburgerToggle.activate();
});

const successClosePopup = document.querySelector(".success-close");
successClosePopup.addEventListener("click", function () {
    changePopupSuccess.close();
    changePopupEnter.close();
    changePopupReg.close();
    changeHamburgerToggle.activate();
});


const enterLinkFromSuccess = document.querySelector(".enter-link-from-success");
enterLinkFromSuccess.addEventListener("click", function () {
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
    changeHamburger.close();
});

const openHamburger = document.querySelector(".header__toggle");
const changeHamburgerToggle = new Hamburger(openHamburger);
openHamburger.addEventListener("click", function () {
    menu.classList.add("header__nav_hamburger", "header__nav_hamburger-black");
    changeHamburger.open();
});


import handleValidate from '../js/utils/validate';

const regForm = document.forms.reg;
const regEmailForm = regForm.elements.reg_email;
const regPasswordForm = regForm.elements.reg_password;
const regNameForm = regForm.elements.reg_name;

regEmailForm.addEventListener("input", handleValidate);
regPasswordForm.addEventListener("input", handleValidate);
regNameForm.addEventListener("input", handleValidate);

const enterForm = document.forms.enter;
const enterEmailForm = enterForm.elements.enter_email;
const enterPasswordForm = enterForm.elements.enter_password;

enterEmailForm.addEventListener("input", handleValidate);
enterPasswordForm.addEventListener("input", handleValidate);


import Button from '../js/components/button';
const changeButton = new Button();

const popupButtonReg = document.querySelector(".popup__button-reg");
const popupButtonEnter = document.querySelector(".popup__button-enter");

changeButton.activateDisactivate(regForm, regEmailForm, regPasswordForm, regNameForm, popupButtonReg);
changeButton.activateDisactivate2(enterForm, enterEmailForm, enterPasswordForm, popupButtonEnter);


import MainApi from '../js/api/mainApi';
import { BASE_URL } from '../js/constants/api';
import { NO_INTERNET } from '../js/constants/texts';
const changeMainApi = new MainApi(BASE_URL);

import TextMessage from '../js/components/textMessage';
const serverRegError = document.querySelector(".popup__error-server-reg");
const changeTextMessageServerRegError = new TextMessage(serverRegError);


regForm.addEventListener('submit', function (event) {
    event.preventDefault();
    changeMainApi.signUp(regEmailForm.value, regPasswordForm.value, regNameForm.value)
        .then(res => {
            if (res.statusCode === 400 || 409) {
                changeTextMessageServerRegError.set(res.message);
            }
            if (res.email && res.name) {
                changeTextMessageServerRegError.clear();
                changePopupReg.close();
                changePopupSuccess.open();
            }
        })
        .catch(err => {
            console.log(err);
            changeTextMessageServerRegError.set(NO_INTERNET);
        });
});

const serverEnterError = document.querySelector(".popup__error-server-enter");
const changeTextMessageServerEnterError = new TextMessage(serverEnterError);

const userName = document.querySelector(".user-name");
const changeTextMessageNameUser = new TextMessage(userName);

const savedArticles = document.querySelector(".header__nav-link_save");
const logoutIcon = document.querySelector(".header__button-logout");
import Header from '../js/components/header';
const changeHeaderSavedArticles = new Header(savedArticles);
const changeHeaderLogoutIcon = new Header(logoutIcon);

enterForm.addEventListener('submit', function (event) {
    event.preventDefault();
    changeMainApi.signIn(enterEmailForm.value, enterPasswordForm.value)
        .then(res => {
            if (res.statusCode === 400) {
                changeTextMessageServerEnterError.set(res.message);
            }
            if (res.token) {
                changeMainApi.me()
                    .then(res => {
                        changeTextMessageNameUser.set(res.name);
                        changeHeaderSavedArticles.show();
                        changeHeaderLogoutIcon.show();
                    })
                    .catch(err => {
                        console.log(err)
                    });

                changePopupEnter.close();
            }
        })
        .catch(err => {
            console.log(err);
            changeTextMessageServerEnterError.set(NO_INTERNET);
        });
});


changeMainApi.me()
    .then(res => {
        if (res.statusCode !== 400) {
            changeTextMessageNameUser.set(res.name);
            changeHeaderSavedArticles.show();
            changeHeaderLogoutIcon.show();
        }
    })
    .catch(err => {
        console.log(err)
    });