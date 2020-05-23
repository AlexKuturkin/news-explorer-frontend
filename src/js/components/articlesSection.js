export default class ArticlesList {
  constructor(name) {
    this.name = name;
  }

  show() {
    this.name.classList.remove("articles_hide");
  }

  hide() {
    this.name.classList.add("articles_hide");
  }
}
