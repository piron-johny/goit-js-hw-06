const counterBtn = document.querySelectorAll("button");
const counterValue = document.querySelector("#value");
counterValue.textContent = 0;

const decrementBtn = counterBtn[0];
const incrementBtn = counterBtn[1];

const counterBtnClick = () => {
  counterBtn.forEach(btn => {
    
    btn.addEventListener('click', () => {
      if (btn.dataset.action === 'decrement') {
        return counterValue.textContent -= 1;
      }
      
      if (btn.dataset.action === 'increment') {
        return counterValue.textContent = +counterValue.textContent + 1;
      }
    })
    
  })
};

counterBtnClick();