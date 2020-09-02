let edit = document.querySelector(".about__profile-edit");
let popupOpened = document.querySelector(".popup");
let popupClose = document.querySelector(".popup__close");
let formBtnSave = document.querySelector(".form__btn");

edit.addEventListener("click", function () {
  popupOpened.classList.add("popup_opened");
});

popupClose.addEventListener("click", function () {
  popupOpened.classList.remove("popup_opened");
});

// Находим форму в DOM
let formElement = document.querySelector(".form"); // Воспользуйтесь методом querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Находим поля формы в DOM
  let nameInput = document.querySelector(".form__item_name_input"); // Воспользуйтесь инструментом .querySelector()
  let jobInput = formElement.querySelector(".form__item_job_input"); // Воспользуйтесь инструментом .querySelector()

  // Получите значение полей из свойства value
  let name = nameInput.value;
  let job = jobInput.value;
  // Выберите элементы, куда должны быть вставлены значения полей
  let profileName = document.querySelector(".about__title");
  let profileJob = document.querySelector(".about__subtitle");
  // Вставьте новые значения с помощью textContent
  profileName.textContent = name;
  profileJob.textContent = job;
}
// Прикрепляем обработчик к форме:
formBtnSave.addEventListener("click", function () {
  popupOpened.classList.remove("popup_opened");
});
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);
