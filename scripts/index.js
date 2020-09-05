let buttonEditProfile = document.querySelector('.about__profile-edit');
let popupWindow = document.querySelector('.popup');
let buttonClosePopup = document.querySelector('.popup__close');

// Находим форму в DOM
let formElement = document.querySelector('.form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.form__item_type_name');
let professionInput = document.querySelector('.form__item_type_profession');
// Выбераем элементы, куда должны быть вставлены значения полей
let aboutName = document.querySelector('.about__title');
let aboutProfession = document.querySelector('.about__subtitle');

function popupOpen() {
  popupWindow.classList.add('popup_opened');
  nameInput.value = aboutName.textContent;
  professionInput.value = aboutProfession.textContent;
}

function popupClose() {
  popupWindow.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Выберите элементы, куда должны быть вставлены значения полей
  // Вставьте новые значения с помощью textContent
  aboutName.textContent = nameInput.value;
  aboutProfession.textContent = professionInput.value;
  popupClose();
}

buttonEditProfile.addEventListener('click', popupOpen);
buttonClosePopup.addEventListener('click', popupClose);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
