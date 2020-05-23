import "../index.css";

import Popup from "../js/components/popup";

import Hamburger from "../js/components/hamburger";

import handleValidate from "../js/utils/validate";

import Button from "../js/components/button";

import MainApi from "../js/api/mainApi";
import baseUrl from "../js/constants/api";
import texts from "../js/constants/texts";

import TextMessage from "../js/components/textMessage";
import Header from "../js/components/header";
import Menu from "../js/components/menu";
import NewsApi from "../js/api/newsApi";
import CardContainer from "../js/components/cardContainer";
import Preloader from "../js/components/preloader";
import ArticlesList from "../js/components/articlesSection";
import Card from "../js/components/card";

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

const changeMainApi = new MainApi(baseUrl);

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
      changeTextMessageServerRegError.set(texts.errorPlusInternet);
    });
});

const savedArticles = document.querySelector(".header__nav-link_save");
const logoutIcon = document.querySelector(".header__button-logout");
const changeHeaderSavedArticles = new Header(savedArticles);
const changeHeaderLogoutIcon = new Header(logoutIcon);
const changeCardContainer = new CardContainer();
const articlesSection = document.querySelector(".articles");
const changeArticlesList = new ArticlesList(articlesSection);
const articlesList = document.querySelector(".articles__list");

let logged = false;

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
        changeCardContainer.clear(articlesList);
        changeArticlesList.hide();
        logged = true;
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
      changeTextMessageServerEnterError.set(texts.errorPlusInternet);
    });
});

changeMainApi
  .me()
  .then((res) => {
    if (res.statusCode !== 400) {
      logged = true;
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
      logged = false;
      changeTextMessageNameUser.set(texts.auth);
      changeHeaderSavedArticles.remove();
      changeHeaderLogoutIcon.remove();
      changeCardContainer.clear(articlesList);
      changeArticlesList.hide();
      searchText.value = "";
      changeButton.inactiveButtonSearch(searchButton);
    })
    .catch((err) => {
      console.log(err);
      // eslint-disable-next-line no-alert
      alert(texts.errorPlusInternet);
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

const changeNewsApi = new NewsApi();

let responseFromNewsApi = "";
let keyword = "";
const articlesButton = document.querySelector(".articles__button");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  changeNotFoundErrorInternet.hide();
  changeNotFound.hide();
  changeCardContainer.clear(articlesList);
  changeCardContainer.clearСounter();
  changeButton.showButton(articlesButton);
  changeArticlesList.hide();
  changeNewsApi
    .getNews(searchText.value)
    .then((res) => {
      keyword = searchText.value;
      responseFromNewsApi = res;
      changePreloader.show();
      setTimeout(() => {
        if (res.totalResults > 0) {
          changePreloader.hide();
          changeArticlesList.show();
          if (res.totalResults <= 3) {
            changeButton.hideButton(articlesButton);
          }
          changeCardContainer.render(res.articles, articlesList, keyword);
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

articlesButton.addEventListener("click", () => {
  const cards = document.querySelectorAll(".card").length;
  changeCardContainer.render(
    responseFromNewsApi.articles,
    articlesList,
    keyword
  );

  if (
    cards + 3 >= responseFromNewsApi.totalResults ||
    (cards + 3 >= 100 && responseFromNewsApi.totalResults >= 100)
  ) {
    changeButton.hideButton(articlesButton);
  }
});

const changeCard = new Card();

articlesList.addEventListener("mouseover", () => {
  if (!logged) {
    changeCard.showAdvice();
  }
});

articlesList.addEventListener("mouseout", () => {
  if (!logged) {
    changeCard.hideAdvice();
  }
});

articlesList.addEventListener("click", () => {
  if (logged) {
    const fieldsArticle = changeCard.saveArticle();
    const saveIcon = changeCard.saveIcon();

    if (fieldsArticle) {
      changeMainApi
        .saveArticle(
          fieldsArticle.keyword,
          fieldsArticle.title,
          fieldsArticle.text,
          fieldsArticle.date,
          fieldsArticle.source,
          fieldsArticle.link,
          fieldsArticle.image
        )
        .then((response) => {
          if (response.data) {
            saveIcon.eventTarget.classList.add("card__image-save_saved");
            const idArticle = response.data._id;
            fieldsArticle.id.setAttribute("id", idArticle);
          }
        })
        .catch((err) => {
          console.log(err);
          // eslint-disable-next-line no-alert
          alert(texts.errorPlusInternet);
        });
    }

    if (!fieldsArticle && saveIcon.cardId) {
      changeMainApi
        .deleteArticle(saveIcon.cardId)
        .then((res) => {
          if (res.message) {
            saveIcon.eventTarget.classList.remove("card__image-save_saved");
            saveIcon.eventTarget.parentNode.classList.remove(
              "card__image-save_saved"
            );
          }
        })
        .catch((err) => {
          console.log(err);
          // eslint-disable-next-line no-alert
          alert(texts.errorPlusInternet);
        });
    }
  }
});
