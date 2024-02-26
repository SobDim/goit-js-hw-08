//* З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

//* Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//* Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

// const listOfCategories = document.querySelector('#categories');
const category = document.querySelectorAll('.item');
console.log(`Number of categories: ${category.length} `);

category.forEach(listItem => {
  console.log(`Category: ${listItem.firstElementChild.textContent} \n
 Elements: ${listItem.lastElementChild.children.length}`);
});

// const titleCategory = document.querySelectorAll('.item h2');
// category.forEach(liStItem => {
//   const title = liStItem.querySelector('h2').textContent;
//   const subcategory = liStItem.querySelectorAll('li');
//   console.log(`Category: ${title} \n Elements: ${subcategory.length}`);
// });
