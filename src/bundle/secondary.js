import "../secondary/secondary.css";

import Hamburger from "../js/components/hamburger";

import MainApi from "../js/api/mainApi";
import baseUrl from "../js/constants/api";
import texts from "../js/constants/texts";

import TextMessage from "../js/components/textMessage";
import redirect from "../js/utils/redirect";
import Card from "../js/components/card";
import CardContainer from "../js/components/cardContainer";
import sortByPopularity from "../js/utils/sortByPopularity";

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
const changeMainApi = new MainApi(baseUrl);
const userNameHeader = document.querySelector(".user-name");
const changeTextMessageNameUserHeader = new TextMessage(userNameHeader);

const userName = document.querySelector(".name");
const changeTextMessageNameUser = new TextMessage(userName);

changeMainApi
  .me()
  .then((res) => {
    if (res.statusCode !== 400) {
      changeTextMessageNameUserHeader.set(res.name);
      changeTextMessageNameUser.set(res.name);
    } else {
      redirect("../index.html");
    }
  })
  .catch((err) => {
    console.log(err);
    // eslint-disable-next-line no-alert
    alert(texts.errorPlusInternet);
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
      alert(texts.errorPlusInternet);
    });
});

const articlesList = document.querySelector(".articles__list");
const changeCard = new Card();

articlesList.addEventListener("mouseover", () => {
  changeCard.showAdvice();
});

articlesList.addEventListener("mouseout", () => {
  changeCard.hideAdvice();
});

const changeCardContainer = new CardContainer();

changeMainApi
  .getArticles()
  .then((res) => {
    console.log(res.data.length);
    const finalObject = sortByPopularity(res.data);
    console.log(finalObject);
    const keywordList = document.querySelector(".info__text-keyword");
    if (finalObject.length === 0) {
      keywordList.textContent = `нет слов, так как нет сохранённых статей`;
    } else if (finalObject.length === 1) {
      keywordList.textContent = finalObject[0].keyword;
    } else if (finalObject.length === 2) {
      keywordList.textContent = `${finalObject[0].keyword}, ${finalObject[1].keyword}`;
    } else if (finalObject.length === 3) {
      keywordList.textContent = `${finalObject[0].keyword}, ${finalObject[1].keyword} и ${finalObject[2].keyword}`;
    } else {
      keywordList.textContent = `${finalObject[0].keyword}, ${
        finalObject[1].keyword
      } и ${finalObject.length - 2} другим`;
    }

    changeCardContainer.renderSavedArticles(res.data, articlesList);
  })
  .catch((err) => {
    console.log(err);
    // eslint-disable-next-line no-alert
    alert(texts.errorPlusInternet);
  });

articlesList.addEventListener("click", () => {
  // const deleteArticle = changeCard.deleteArticle();
  const saveIcon = changeCard.saveIcon();
  if (saveIcon) {
    changeMainApi
      .deleteArticle(saveIcon.cardId)
      .then((res) => {
        if (res.message) {
          saveIcon.card.remove();
        }
      })
      .catch((err) => {
        console.log(err);
        // eslint-disable-next-line no-alert
        alert(texts.errorPlusInternet);
      });
  }
});
