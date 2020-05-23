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
const number = document.querySelector(".number");
const articlesList = document.querySelector(".articles__list");
const userNameHeader = document.querySelector(".user-name");
const userName = document.querySelector(".name");
const logoutIcon = document.querySelector(".header__button-logout");
const keywordList = document.querySelector(".info__text-keyword");

const changeHamburger = new Hamburger(closeHamburger);
const changeCardContainer = new CardContainer();
const changeCard = new Card();
const changeMainApi = new MainApi(baseUrl);
const changeTextMessageCount = new TextMessage(number);
const changeTextMessageNameUserHeader = new TextMessage(userNameHeader);
const changeTextMessageNameUser = new TextMessage(userName);

openHamburger.addEventListener("click", () => {
  menu.classList.add("header__nav_hamburger", "header__nav_hamburger-grey");
  changeHamburger.open();
});

closeHamburger.addEventListener("click", () => {
  menu.classList.remove("header__nav_hamburger", "header__nav_hamburger-grey");
  changeHamburger.close();
});

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

articlesList.addEventListener("mouseover", () => {
  changeCard.showAdvice();
});

articlesList.addEventListener("mouseout", () => {
  changeCard.hideAdvice();
});

articlesList.addEventListener("click", () => {
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

changeMainApi
  .getArticles()
  .then((res) => {
    if (res.message) {
      changeTextMessageCount.set(0);
      keywordList.textContent = `нет слов, так как нет сохранённых статей`;
    } else {
      changeTextMessageCount.set(res.data.length);
      const finalObject = sortByPopularity(res.data);
      if (finalObject.length === 1) {
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
    }
  })
  .catch((err) => {
    console.log(err);
    // eslint-disable-next-line no-alert
    alert(texts.errorPlusInternet);
  });
