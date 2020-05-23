export default class Hamburger {

    constructor(name) {
        this.name = name;
    }

    open() {
        this.name.classList.add("header__hamburger_open");
    }

    close() {
        this.name.classList.remove("header__hamburger_open");
    }

    activate() {
        this.name.classList.remove("header__toggle_hide");
    }

    disactivate() {
        this.name.classList.add("header__toggle_hide");
    }
}