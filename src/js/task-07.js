const inputRangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
let rangeValue = inputRangeEl.value

console.log(rangeValue);
textEl.style.fontSize = 'rangeValue';
const makeFontSizeEditor = () => {
  inputRangeEl.addEventListener("input", () => {
    textEl.style.fontSize = 'rangeValue';
  });
};
