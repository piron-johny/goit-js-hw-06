const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const obj = new DocumentFragment();

const makeIngedients = (ingredients) => {
  ingredients.forEach((ingredient) => {

    const createListItem = document.createElement("li");
    createListItem.classList.add("item");
    createListItem.innerHTML = ingredient;
    obj.append(createListItem)

  });
  
  return list.append(obj)
}

makeIngedients(ingredients);

