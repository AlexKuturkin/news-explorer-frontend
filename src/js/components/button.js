export default class Button {
    activateDisactivate(form, upInput, middleInput, downInput, button) {
        form.addEventListener("input", function (event) {
            const isButton = upInput.value.length !== 0 && middleInput.value.length !== 0 && downInput.value.length !== 0;

            if (document.querySelectorAll('.popup__content .popup__content_invalid').length === 0 && isButton) {
                button.removeAttribute("disabled");
                button.classList.remove("popup__button_inactive");
            } else {
                button.setAttribute("disabled", 'true');
                button.classList.add("popup__button_inactive");
            }
        });
    }

    activateDisactivate2(form, upInput, downInput, button) {
        form.addEventListener("input", function (event) {
            const isButton = upInput.value.length !== 0 && downInput.value.length !== 0;

            if (document.querySelectorAll('.popup__content .popup__content_invalid').length === 0 && isButton) {
                button.removeAttribute("disabled");
                button.classList.remove("popup__button_inactive");
            } else {
                button.setAttribute("disabled", 'true');
                button.classList.add("popup__button_inactive");
            }
        });
    }

    inactiveButton(name) {
        name.classList.add("popup__button_inactive");
        name.setAttribute("disabled", 'true');
    }
}