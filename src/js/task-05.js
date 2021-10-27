const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

console.log(inputText);
console.log(outputText);

inputText.addEventListener('input', (event) => {
  outputText.textContent = '';
  return outputText.textContent = event.currentTarget.textContent

});