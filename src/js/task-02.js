const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

// const obj = new DocumentFragment();

// const makeIngedients = (ingredients) => {
//   ingredients.forEach((ingredient) => {

//     const createListItem = document.createElement("li");
//     createListItem.classList.add("item");
//     createListItem.innerHTML = ingredient;
//     obj.append(createListItem)

//   });

//   return list.append(obj)
// }


const makeIngedients = (ingredients) => {
  
  const createListItem = document.createElement("li");
  createListItem.classList.add("item");

  const b = [];
  ingredients.forEach((elem, ind ) => {

    console.log('elem ->', elem, 'ind ->', ind);
    createListItem.textContent = elem
    b.push(createListItem)

    return

  });
  console.log(b.join(','));
  return list.append(...b);
};

makeIngedients(ingredients);
