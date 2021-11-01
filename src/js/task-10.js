const refs = { 
  inputCoutEl: document.querySelector('#controls input'),
  createBtnEl: document.querySelector('[data-create]'), 
  destroyBtnEl: document.querySelector('[data-destroy]'),
};


refs.inputCoutEl.addEventListener('input', createBoxes);

refs.createBtnEl.addEventListener('click', createElements);

function createElements(event){
  
}

function createBoxes(amount) {
  console.log(amount.currentTarget.value);
}


function destroyBoxes(){

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


