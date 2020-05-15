export default class Header {
    constructor(name) {
        this.name = name;
    }

    show() {
        this.name.classList.remove("header__element_hide");
    }

    remove() {
        this.name.classList.add("header__element_hide");
    }
}