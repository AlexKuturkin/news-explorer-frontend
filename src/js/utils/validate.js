/* Функция валидации */
export function validate(element) {
  const errorElement = document.querySelector(`#error-${element.id}`);

  if (element.value.length === 0) {
    errorElement.textContent = "Это обязательное поле";
    element.parentNode.classList.add("popup__content_invalid");
    return false;
  }
  if (
    element.type === "email" &&
    element.value.match(/^\w+([.\-\]?\w+)@\w+([.-]?\w+)*(\.\w{2,8})$"*/) ===
      null
  ) {
    errorElement.textContent = "Email в формате: sega@yandex.ru";
    element.parentNode.classList.add("popup__content_invalid");
    return false;
  }
  if (element.type === "password" && element.value.length < 10) {
    errorElement.textContent = "Пароль должен быть от 10 и более символов";
    element.parentNode.classList.add("popup__content_invalid");
    return false;
  }
  if (
    (element.name === "reg_name" || element.name === "search_text") &&
    element.value.length < 2
  ) {
    errorElement.textContent = "Поле должно быть от 2 и более символов";
    element.parentNode.classList.add("popup__content_invalid");
    return false;
  }
  return true;
}

/* Функция проверки валидации в инпутах */
export default function handleValidate(event) {
  event.target.parentNode.classList.remove("popup__content_invalid");
  event.target.textContent = "";

  validate(event.target);
}
