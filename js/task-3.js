// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання.
//Обов’язково очищай значення в інпуті по краях від пробілів .
// Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const userNameInput = document.querySelector('.js-input');
const userNameSpan = document.querySelector('.js-span');

userNameInput.addEventListener('input', onUserNameInput);

function onUserNameInput() {
  const userName = userNameInput.value.trim() || 'Anonymous';
  userNameSpan.textContent = userName;
  // if (userName.length >= 3) {
  //   userNameSpan.textContent = userName;
  // }
}
