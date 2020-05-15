import checkImage from "../utils/image";
import dateArtirle from "../utils/dateArticle";
import deleteTags from "../utils/deleteTags";

export default class CardContainer {
  render(array, container) {
    // eslint-disable-next-line no-plusplus
    for (let k = 0; k < array.length; k++) {
      // eslint-disable-next-line no-param-reassign
      container.innerHTML += `
            <div class="card">
            <a
              href=${array[k].url}
              class="card__link"
              target="_blank"
            >
              <div class="card__image-container">
                <img
                  class="card__image"
                  alt="листья цветка"
                  src=${checkImage(array[k].urlToImage)}
                />
              </div>
              <div class="card__info">
                <time class="card__info-time"
                  >${dateArtirle(array[k].publishedAt)}</time
                >
                <h4 class="card__info-title">
                  ${array[k].title}
                </h4>
                <p class="card__info-text">
                ${deleteTags(array[k].description)}
                </p>
                <p class="card__info-source">${array[k].source.name}</p>
              </div>
            </a>
            <span class="card__image-hint"
              >Войдите, чтобы сохранять статьи</span
            >
            <button type="button" class="card__image-button">
              <svg
                class="card__image-save card__image-save_saved"
                width="14"
                height="19"
                viewBox="0 0 14 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>`;
    }
  }

  clear(container) {
    // eslint-disable-next-line no-param-reassign
    container.innerHTML = "";
  }
}
