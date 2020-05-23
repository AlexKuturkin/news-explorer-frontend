import checkImage from "../utils/image";
import dateArtirle from "../utils/dateArticle";
import deleteTags from "../utils/deleteTags";

function numberGenerate(start, step) {
  start = start || 0;
  step = step || 1;
  start -= step;
  return function generator() {
    // eslint-disable-next-line no-return-assign
    return (start += step);
  };
}
let generator = numberGenerate(0, 1);

export default class CardContainer {
  render(array, container, text) {
    generator();

    const three = 2 + generator();
    const threePlus = three < array.length ? three : array.length;
    let k = -2 + generator();

    // eslint-disable-next-line no-plusplus
    for (k; k < threePlus; k++) {
      container.insertAdjacentHTML(
        "beforeend",
        `
            <div class="card">
            <a
              href=${array[k].url}
              class="card__link"
              target="_blank"
            >
              <div class="card__image-container">
                <img
                  class="card__image"
                  alt="картинка новости"
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
            <span style="display:none" class="card__image-keyword">${text}</span>
            <span class="card__image-hint card__image-hint_hide"
              >Войдите, чтобы сохранять статьи</span
            >
            <button type="button" class="card__image-button">
              <svg
                class="card__image-save"
                width="14"
                height="19"
                viewBox="0 0 14 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path  class="card__image-path"
                  d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>`
      );
    }
  }

  renderSavedArticles(array, container) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < array.length; i++) {
      container.insertAdjacentHTML(
        "beforeend",
        `
        <div class="card" id=${array[i]._id}>
        <a href=${array[i].link} class="card__link" target="_blank">
          <div class="card__image-container">
            <img
              class="card__image"
              alt="картинка новости"
              src=${checkImage(array[i].image)}
            />
          </div>
          <div class="card__info">
            <time class="card__info-time"
              >${array[i].date}</time
            >
            <h4 class="card__info-title">
            ${array[i].title}
            </h4>
            <p class="card__info-text">
            ${array[i].text}
            </p>
            <p class="card__info-source">${array[i].source}</p>
          </div>
        </a>
        <span class="card__image-keyword">${array[i].keyword}</span>
        <span class="card__image-hint card__image-hint_hide"
          >Убрать из сохранённых</span
        >
        <button type="button" class="card__image-button">
          <svg
            class="card__image-delete"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="card__image-path"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 3H9V5H3V7H21V5H15V3ZM5 9V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V9H17V20H7V9H5ZM9 9L9 18H11L11 9H9ZM13 9V18H15V9H13Z"
            />
          </svg>
        </button>
      </div>`
      );
    }
  }

  clearСounter() {
    generator = numberGenerate(0, 1);
  }

  clear(container) {
    while (container.firstChild) container.removeChild(container.firstChild);
  }
}
