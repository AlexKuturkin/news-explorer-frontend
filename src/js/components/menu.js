export default class Menu {
  constructor(name) {
    this.name = name;
  }

  open() {
    this.name.classList.add(
      "header__nav_hamburger",
      "header__nav_hamburger-black"
    );
  }

  close() {
    this.name.classList.remove(
      "header__nav_hamburger",
      "header__nav_hamburger-black"
    );
  }
}
