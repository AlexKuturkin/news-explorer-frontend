export default class Header {
    constructor(name) {
        this.name = name;
    }

    show() {
        this.name.classList.remove("header__element_hide");
    }
}