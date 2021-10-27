const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
// --#1
// const markup = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');
// console.log(markup);
// list.innerHTML = markup;


// --#2
// for (let i = 1; i < ingredients.length; i += 1) {

//   const createListItem = document.createElement('li');
//   createListItem.classList.add('item');
//   createListItem.innerHTML = ingredients[i];
//   list.appendChild(createListItem);
// }

// --#3
const makeIngedients = (ingredients) => {
  return ingredients.map((ingredient) => {
    const createListItem = document.createElement("li");
    createListItem.classList.add("item");

    createListItem.innerHTML = ingredient;
    return list.appendChild(createListItem);
  });
};

makeIngedients(ingredients);

