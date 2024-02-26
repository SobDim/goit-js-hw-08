const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

/* Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.

Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().

Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
Додай мінімальне оформлення галереї флексбоксами через CSS класи.

На що буде звертати увагу ментор при перевірці:

Створена й додана в DOM галерея із трьох зображень
Галерея додана у список ul.gallery і являє собою 3 елементи <li>, в які вкладені елементи <img>
Для створення елементів <img> використані дані з масиву об’єктів images
Усі елементи галереї додані в DOM за одну операцію додавання
Є мінімальне оформлення галереї флексбоксами через CSS класи
*/

const listOfPictures = document.querySelector('.gallery');
const myElements = [];

for (const img of images) {
  //створюю <li>
  const liElem = document.createElement('li');
  //додаю класи в <li>
  liElem.classList.add('item');
  liElem.classList.add('cards');
  //створюю <img>
  const card = document.createElement('img');
  //додаю атрибути в <img>
  card.setAttribute('src', `${img.url}`);
  card.setAttribute('alt', `${img.alt}`);
  //закидаю <img> в <li>
  liElem.append(card);
  // закидаю все в масив
  myElements.push(liElem);
}
// викидаю все з масива в <ul>
listOfPictures.append(...myElements);

// рекомендаваний варіант Володимиром

// const listOfPictures = document.querySelector('.gallery');
// // шаблон картки
// function cardTemplate(obj) {
//   return `<li class="item cards">
//     <img
//       src="${obj.url}"
//       alt="${obj.alt}"
//     />
//   </li>`;
// }
// console.log(cardTemplate(images));

// function cardsTemplate(arr) {
//   const markup = arr.map(cardTemplate).join('\n');
//   return markup;
// }

// listOfPictures.innerHTML = cardsTemplate(images);
