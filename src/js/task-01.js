const refs = {
  listEl: document.querySelector('#categories'),
  listItemEl: document.querySelectorAll('.item'),
  listItemTitleEl: document.querySelectorAll('h2'),
  listAnimalsEl: document.querySelectorAll('.item ul'),
}


const listCategories = () => {
  console.log(`Number of categories: ${refs.listEl.children.length}`);

  for (let i = 0; i < refs.listEl.children.length; i += 1) {
    console.log(`Category: ${refs.listItemTitleEl[i].textContent}`);
    console.log(`Elements: ${refs.listAnimalsEl[i].children.length}`);
  }
};
listCategories()
