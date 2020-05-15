import "../index.css";

import Popup from "../js/components/popup";

import Hamburger from "../js/components/hamburger";

import handleValidate from "../js/utils/validate";

import Button from "../js/components/button";

import MainApi from "../js/api/mainApi";
import { BASE_URL } from "../js/constants/api";
import { AUTH, ERROR_PLUS_INTERNET } from "../js/constants/texts";

import TextMessage from "../js/components/textMessage";
import Header from "../js/components/header";
import Menu from "../js/components/menu";
import NewsApi from "../js/api/newsApi";
import CardContainer from "../js/components/cardContainer";
import Preloader from "../js/components/preloader";
import ArticlesList from "../js/components/articlesSection";

const closeHamburger = document.querySelector(".header__hamburger_close");
const changeHamburger = new Hamburger(closeHamburger);

const enterForm = document.forms.enter;

const changeButton = new Button();

const popupButtonEnter = document.querySelector(".popup__button-enter");
const serverEnterError = document.querySelector(".popup__error-server-enter");
const changeTextMessageServerEnterError = new TextMessage(serverEnterError);

const popupEnter = document.querySelector(".enter");
const changePopupEnter = new Popup(popupEnter);

const openHamburger = document.querySelector(".header__toggle");
const changeHamburgerToggle = new Hamburger(openHamburger);

const popupReg = document.querySelector(".reg");
const changePopupReg = new Popup(popupReg);

const userName = document.querySelector(".user-name");
const changeTextMessageNameUser = new TextMessage(userName);

const menu = document.querySelector(".header__nav");
const changeMenu = new Menu(menu);

const authorizationButtonFromMenu = document.querySelector(".header__button");
authorizationButtonFromMenu.addEventListener("click", () => {
  if (userName.textContent === "Авторизоваться") {
    changeMenu.close();
    changeHamburger.close();
    enterForm.reset();
    changeButton.inactiveButton(popupButtonEnter);
    changeTextMessageServerEnterError.clear();
    changePopupEnter.open();
    changeHamburgerToggle.disactivate();
  }
});

const enterLinkFromReg = document.querySelector(".enter-link");
enterLinkFromReg.addEventListener("click", () => {
  changePopupReg.close();
  changeTextMessageServerEnterError.clear();
  enterForm.reset();
  changeButton.inactiveButton(popupButtonEnter);
  changePopupEnter.open();
});

const authorizationLinkFromEnter = document.querySelector(
  ".popup__advice-link_big"
);
const regForm = document.forms.reg;
const serverRegError = document.querySelector(".popup__error-server-reg");
const changeTextMessageServerRegError = new TextMessage(serverRegError);
const popupButtonReg = document.querySelector(".popup__button-reg");

authorizationLinkFromEnter.addEventListener("click", () => {
  changePopupEnter.close();
  regForm.reset();
  changeTextMessageServerRegError.clear();
  changeButton.inactiveButton(popupButtonReg);
  changePopupReg.open();
});

const closePopup = document.querySelector(".reg-close");
closePopup.addEventListener("click", () => {
  changePopupEnter.close();
  changePopupReg.close();
  changeHamburgerToggle.activate();
});

const enterClosePopup = document.querySelector(".enter-close");
enterClosePopup.addEventListener("click", () => {
  changePopupEnter.close();
  changePopupReg.close();
  changeHamburgerToggle.activate();
});

const popupSuccess = document.querySelector(".success");
const changePopupSuccess = new Popup(popupSuccess);
const successClosePopup = document.querySelector(".success-close");
successClosePopup.addEventListener("click", () => {
  changePopupSuccess.close();
  changePopupEnter.close();
  changePopupReg.close();
  changeHamburgerToggle.activate();
});

const enterLinkFromSuccess = document.querySelector(".enter-link-from-success");
enterLinkFromSuccess.addEventListener("click", () => {
  changePopupSuccess.close();
  changePopupEnter.open();
});

closeHamburger.addEventListener("click", () => {
  changeMenu.close();
  changeHamburger.close();
});

openHamburger.addEventListener("click", () => {
  changeMenu.open();
  changeHamburger.open();
});

const regEmailForm = regForm.elements.reg_email;
const regPasswordForm = regForm.elements.reg_password;
const regNameForm = regForm.elements.reg_name;

regEmailForm.addEventListener("input", handleValidate);
regPasswordForm.addEventListener("input", handleValidate);
regNameForm.addEventListener("input", handleValidate);

const enterEmailForm = enterForm.elements.enter_email;
const enterPasswordForm = enterForm.elements.enter_password;

enterEmailForm.addEventListener("input", handleValidate);
enterPasswordForm.addEventListener("input", handleValidate);

const searchForm = document.forms.search;
const searchText = searchForm.elements.search_text;
searchText.addEventListener("input", handleValidate);

const searchButton = document.querySelector(".search__button");

changeButton.activeDisactive(
  regForm,
  regEmailForm,
  regPasswordForm,
  regNameForm,
  popupButtonReg
);

changeButton.activeDisactive2(
  enterForm,
  enterEmailForm,
  enterPasswordForm,
  popupButtonEnter
);

changeButton.activeDisactive3(searchForm, searchText, searchButton);

const changeMainApi = new MainApi(BASE_URL);

regForm.addEventListener("submit", (event) => {
  event.preventDefault();
  changeMainApi
    .signUp(regEmailForm.value, regPasswordForm.value, regNameForm.value)
    .then((res) => {
      // eslint-disable-next-line no-constant-condition
      if (res.statusCode === 400 || 409) {
        changeTextMessageServerRegError.set(res.message);
      }
      if (res.email && res.name) {
        changeTextMessageServerRegError.clear();
        changePopupReg.close();
        changePopupSuccess.open();
      }
    })
    .catch((err) => {
      console.log(err);
      changeTextMessageServerRegError.set(ERROR_PLUS_INTERNET);
    });
});

const savedArticles = document.querySelector(".header__nav-link_save");
const logoutIcon = document.querySelector(".header__button-logout");
const changeHeaderSavedArticles = new Header(savedArticles);
const changeHeaderLogoutIcon = new Header(logoutIcon);

enterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  changeMainApi
    .signIn(enterEmailForm.value, enterPasswordForm.value)
    .then((res) => {
      // eslint-disable-next-line no-constant-condition
      if (res.statusCode === 400 || 401) {
        changeTextMessageServerEnterError.set(res.message);
      }
      if (res.token) {
        changeMainApi
          .me()
          .then((response) => {
            changeTextMessageNameUser.set(response.name);
            changeHeaderSavedArticles.show();
            changeHeaderLogoutIcon.show();
            changeHamburgerToggle.activate();
          })
          .catch((err) => {
            console.log(err);
          });

        changePopupEnter.close();
      }
    })
    .catch((err) => {
      console.log(err);
      changeTextMessageServerEnterError.set(ERROR_PLUS_INTERNET);
    });
});

changeMainApi
  .me()
  .then((res) => {
    if (res.statusCode !== 400) {
      changeTextMessageNameUser.set(res.name);
      changeHeaderSavedArticles.show();
      changeHeaderLogoutIcon.show();
    }
  })
  .catch((err) => {
    console.log(err);
  });

logoutIcon.addEventListener("click", () => {
  changeMainApi
    .logout()
    .then((res) => {
      console.log(res);
      changeTextMessageNameUser.set(AUTH);
      changeHeaderSavedArticles.remove();
      changeHeaderLogoutIcon.remove();
    })
    .catch((err) => {
      console.log(err);
      // eslint-disable-next-line no-alert
      alert(ERROR_PLUS_INTERNET);
    });
});

const preloader = document.querySelector(".preloader");
const changePreloader = new Preloader(preloader);

const notFound = document.querySelector(".not-found");
const changeNotFound = new Preloader(notFound);

const notFoundErrorInternet = document.querySelector(
  ".not-found-error-internet"
);
const changeNotFoundErrorInternet = new Preloader(notFoundErrorInternet);

const articlesSection = document.querySelector(".articles");
const changeArticlesList = new ArticlesList(articlesSection);

const changeNewsApi = new NewsApi();
const changeCard = new CardContainer();
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  changeNotFoundErrorInternet.hide();
  changeNotFound.hide();
  const articlesList = document.querySelector(".articles__list");
  // console.log(articlesList);
  changeCard.clear(articlesList);
  changeArticlesList.hide();
  changeNewsApi
    .getNews(searchText.value)
    .then((res) => {
      console.log(res);
      changePreloader.show();
      setTimeout(() => {
        if (res.totalResults > 0) {
          changePreloader.hide();
          changeArticlesList.show();
          changeCard.render(res.articles, articlesList);
        } else {
          changePreloader.hide();
          changeNotFound.show();
        }
      }, 1000);
    })
    .catch((err) => {
      changePreloader.show();
      setTimeout(() => {
        changePreloader.hide();
        changeNotFoundErrorInternet.show();
      }, 1000);
      console.log(err);
    });
});

/* const articlesButton = document.querySelector(".articles__button");
articlesButton.addEventListener("click", () => {
  changeNewsApi
  .getNews(searchText.value)
}); */
