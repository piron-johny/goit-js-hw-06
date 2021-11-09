const refs = {
  listEl: document.querySelector("#categories"),
  listItemEl: document.querySelectorAll(".item"),
  listItemTitleEl: document.querySelectorAll("h2"),
  listAnimalsEl: document.querySelectorAll(".item ul"),
};

const listCategories = () => {
  console.log(`Number of categories: ${refs.listEl.children.length}`);

  refs.listItemEl.forEach((el, i) => {
    console.log(`Category: ${refs.listItemTitleEl[i].textContent}`);
    console.log(`Category: ${refs.listAnimalsEl[i].children.length}`);
  });
};
listCategories();
