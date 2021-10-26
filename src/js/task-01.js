const listEl = document.querySelector('#categories');

const listItemEl = document.querySelectorAll('.item');
const listItemTitleEl = document.querySelectorAll('h2');
const listAnimalsEl = listEl.querySelectorAll('ul');


console.log(`Number of categories: ${listItemEl.length}`);

console.log(`Category: ${listItemTitleEl[0].textContent}`);
console.log(`Elements: ${listAnimalsEl[0].children.length}`);

console.log(`Category: ${listItemTitleEl[1].textContent}`);
console.log(`Elements: ${listAnimalsEl[1].children.length}`);

console.log(`Category: ${listItemTitleEl[2].textContent}`);
console.log(`Elements: ${listAnimalsEl[2].children.length}`);

//====================================================================