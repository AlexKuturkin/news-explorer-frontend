export default class Popup {
  constructor(name) {
    this.name = name;
  }

  open() {
    this.name.classList.add("popup_open");
    document
      .querySelectorAll(".popup__content .popup__content_invalid")
      .forEach((n) => n.classList.remove("popup__content_invalid"));
  }

  close() {
    this.name.classList.remove("popup_open");
  }
}
