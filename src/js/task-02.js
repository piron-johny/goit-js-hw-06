const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

// const markup = ingredients.map(ingredient => `<li class="list__item">${ingredient}</li>`).join('');
// console.log(markup);
// list.innerHTML = markup;


for (let i = 1; i < ingredients.length; i += 1) {

  const createListItem = document.createElement('li');
  
  createListItem.className = 'item';
  createListItem.innerHTML = ingredients[i];
  list.appendChild(createListItem);
}


console.log('list --->',list);


