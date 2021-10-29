const inputRangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");


const makeFontSizeEditor = (event) => {
  textEl.style.fontSize = event.currentTarget.value + 'px';
};

inputRangeEl.addEventListener("input", makeFontSizeEditor)
