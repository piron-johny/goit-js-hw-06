const listById = document.querySelector('#categories');
console.log(listById);

const listItemByClass = listById.querySelector('.item');
console.log(listItemByClass);

const listItemTitleByClass = listItemByClass.firstElementChild;
console.log(listItemTitleByClass);

// class Category {

//   constructor({listCategory, category, elemrnts} ={}) {
//     this.listCategory = listCategory;
//     this.category = category;
//     this.elemrnts = elemrnts;
//   }

//   get showCategory (){
//     return ``
//   }
// }

// for (const item of listById) {
//   console.log(item);
// }