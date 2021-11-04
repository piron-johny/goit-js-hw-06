const refs = {
  inputValueEl: document.querySelector("#controls input"),
  createBtnEl: document.querySelector("[data-create]"),
  destroyBtnEl: document.querySelector("[data-destroy]"),
  resultInnerVelue: document.querySelector("#boxes"),
};

refs.createBtnEl.addEventListener("click", createBoxes);
refs.destroyBtnEl.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};


function createBoxes(amount) {
  let elementInList = refs.resultInnerVelue.childElementCount;
  amount = refs.inputValueEl.value;

  if (elementInList === 0) {
    for (let i = 0; i < +amount; i += 1) {
      refs.resultInnerVelue.insertAdjacentHTML(
        "beforeend",
        `<div style="width: ${i * 10 + 30 + "px"};
          height: ${i * 10 + 30 + "px"};
          background-color: ${getRandomHexColor()};
          ">
          ${i + 1}
        </div >`
      );
    }
  }

  if (elementInList !== 0) {
    for (let i = elementInList; i < (+amount + elementInList); i += 1) {
      refs.resultInnerVelue.insertAdjacentHTML(
        "beforeend",
        `<div style="width: ${i * 10 + 30 + "px"};
          height: ${i * 10 + 30 + "px"};
          background-color: ${getRandomHexColor()};
          ">
          ${i + 1}
        </div >`
      );

    }
  }
  refs.inputValueEl.value = 0
};

function destroyBoxes() {
  refs.resultInnerVelue.innerHTML = "";
};