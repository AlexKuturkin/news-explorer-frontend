export default class Popup {

    constructor(name) {
        this.name = name;
    }

    open() {
        this.name.classList.add("popup_open");
    }

    close() {
        this.name.classList.remove("popup_open");
    }
}