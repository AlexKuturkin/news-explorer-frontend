export default class TextMessage {
    constructor(name) {
        this.name = name;
    }

    clear() {
        this.name.textContent = '';
    }

    set(string) {
        this.name.textContent = string;
    }
}