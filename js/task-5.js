//! Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.
//! Для генерування випадкового кольору використовуй функцію getRandomHexColor().
//! Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.
//! На що буде звертати увагу ментор при перевірці:
//! Фон на <body> задається тільки після кліку на button.change-color
//! При кожному кліку на елемент button.change-color фон <body> зафарбовується новим рандомним кольором
//! На <body> і span.color значення одного й того самого кольору

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const btn = document.querySelector('.js-change-color');
// const body = document.querySelector('body');
// const span = document.querySelector('.color');

// btn.addEventListener('click', onBtnClick => {
//   const backColor = getRandomHexColor();

//   btn.parentNode.style.backgroundColor = backColor;
//   span.textContent = backColor;
// });

//js - change - color;

const widget = document.querySelector('.js-widget');

widget.lastElementChild.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  widget.parentNode.style.backgroundColor = randomColor;
  widget.firstElementChild.firstElementChild.textContent = randomColor;
});
