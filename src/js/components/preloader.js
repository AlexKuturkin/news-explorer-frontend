export default class Preloader {
  constructor(name) {
    this.name = name;
  }

  show() {
    this.name.classList.remove("preloader_hide");
  }

  hide() {
    this.name.classList.add("preloader_hide");
  }
}
