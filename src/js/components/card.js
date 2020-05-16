export default class Card {
  showAdvice() {
    if (
      event.target.classList.contains("card__image-save") ||
      event.target.classList.contains("card__image-path") ||
      event.target.classList.contains("card__image-delete")
    ) {
      event.target.closest(".card").classList.add("show");
    }
  }

  hideAdvice() {
    if (
      event.target.classList.contains("card__image-save") ||
      event.target.classList.contains("card__image-delete")
    ) {
      event.target.closest(".card").classList.remove("show");
    }
  }

  // eslint-disable-next-line consistent-return
  saveIcon() {
    if (
      event.target.classList.contains("card__image-save") ||
      event.target.classList.contains("card__image-delete") ||
      event.target.classList.contains("card__image-path")
    ) {
      const eventTarget = event.target;
      const cardId = event.target.closest(".card").id;
      const card = event.target.closest(".card");
      return { eventTarget, card, cardId };
    }
  }

  // eslint-disable-next-line consistent-return
  saveArticle() {
    if (
      (event.target.classList.contains("card__image-save") ||
        event.target.classList.contains("card__image-path")) &&
      !event.target.classList.contains("card__image-save_saved")
    ) {
      const id = event.target.parentNode.parentNode;

      const keyword = event.target
        .closest(".card")
        .querySelector(".card__image-keyword").textContent;
      const title = event.target
        .closest(".card")
        .querySelector(".card__info-title").textContent;
      const text = event.target
        .closest(".card")
        .querySelector(".card__info-text").textContent;
      const date = event.target
        .closest(".card")
        .querySelector(".card__info-time").textContent;
      const source = event.target
        .closest(".card")
        .querySelector(".card__info-source").textContent;
      const link = event.target.closest(".card").querySelector(".card__link")
        .href;
      const image = event.target.closest(".card").querySelector(".card__image")
        .src;

      return {
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
        id,
      };
    }
  }
}
