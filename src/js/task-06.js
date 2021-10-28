const inputEl = document.querySelector("#validation-input");

// const inputvalidation = () => {
//   inputEl.addEventListener("input", () => {
//     if (inputEl.value.length !== +inputEl.dataset.length) {
//       inputEl.classList.add("invalid");
//     }
//     if (inputEl.value.length === +inputEl.dataset.length) {
//       inputEl.classList.add("valid");
//       inputEl.classList.remove("invalid");
//     }
//   });
// };

const inputvalidation = () => {
  inputEl.addEventListener("input", () =>
    inputEl.value.length !== +inputEl.dataset.length
      ? inputEl.classList.add("invalid")
      : (inputEl.classList.add("valid"), inputEl.classList.remove("invalid"))
  );
};
inputvalidation();
