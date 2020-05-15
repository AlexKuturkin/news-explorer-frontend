export default class Button {
  activeDisactive(form, upInput, middleInput, downInput, button) {
    form.addEventListener("input", (event) => {
      const isButton =
        upInput.value.length !== 0 &&
        middleInput.value.length !== 0 &&
        downInput.value.length !== 0;

      if (
        document.querySelectorAll(".popup__content .popup__content_invalid")
          .length === 0 &&
        isButton
      ) {
        button.removeAttribute("disabled");
        button.classList.remove("popup__button_inactive");
      } else {
        button.setAttribute("disabled", "true");
        button.classList.add("popup__button_inactive");
      }
    });
  }

  activeDisactive2(form, upInput, downInput, button) {
    form.addEventListener("input", (event) => {
      const isButton =
        upInput.value.length !== 0 && downInput.value.length !== 0;

      if (
        document.querySelectorAll(".popup__content .popup__content_invalid")
          .length === 0 &&
        isButton
      ) {
        button.removeAttribute("disabled");
        button.classList.remove("popup__button_inactive");
      } else {
        button.setAttribute("disabled", "true");
        button.classList.add("popup__button_inactive");
      }
    });
  }

  activeDisactive3(form, input, button) {
    form.addEventListener("input", (event) => {
      const isButton = input.value.length >= 2;

      if (isButton) {
        button.removeAttribute("disabled");
        button.classList.remove("search__button_inactive");
      } else {
        button.setAttribute("disabled", "true");
        button.classList.add("search__button_inactive");
      }
    });
  }

  inactiveButton(name) {
    name.classList.add("popup__button_inactive");
    name.setAttribute("disabled", "true");
  }
}
