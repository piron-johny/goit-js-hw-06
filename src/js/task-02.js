const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const makeIngedients = (ingredients) => {
  list.append(
    ...ingredients.map((elem) => {
      const createListItem = document.createElement("li");
      createListItem.classList.add("item");
      createListItem.textContent = elem;

      return createListItem;
    })
  );
};

makeIngedients(ingredients);
