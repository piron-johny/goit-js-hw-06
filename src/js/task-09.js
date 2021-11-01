

const refs = {
  colorBtnEl: document.querySelector('.change-color'),
  colorHexEl: document.querySelector('.color'),
  bodyEl: document.querySelector('body'),
}


refs.colorBtnEl.addEventListener('click', onClickBtnColor);

function onClickBtnColor() {
  refs.bodyEl.style.backgroundColor = (getRandomHexColor());
  refs.colorHexEl.textContent = (getRandomHexColor())
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}