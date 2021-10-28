const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

// const pasrseValueOfInput = () => {
//   inputText.addEventListener("input", (event) => {
//     if (inputText.value.length === 0) {
//       outputText.textContent = "Anonymous";
//     }
//     if (inputText.value.length !== 0) {
//       outputText.textContent = event.currentTarget.value;
//     }
//   });
// };

const pasrseValueOfInput = () => {
  inputText.addEventListener("input", (event) =>
    inputText.value.length === 0
      ? (outputText.textContent = "Anonymous")
      : (outputText.textContent = event.currentTarget.value)
  );
};
pasrseValueOfInput();
