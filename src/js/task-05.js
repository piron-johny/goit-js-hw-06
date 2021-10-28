const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");


const pasrseValueOfInput = () => {

  if (!inputText.value) {
    outputText.innerHTML = 'Anonymous';
  }

  inputText.addEventListener(
    "input",
    (event) => (outputText.textContent = event.currentTarget.value)
  );
};

pasrseValueOfInput();
