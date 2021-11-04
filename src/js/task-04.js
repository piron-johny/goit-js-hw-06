const counterBtn = document.querySelectorAll("button");
const counterValue = document.querySelector("#value");
let value = 0;
counterValue.textContent = value;

const counterBtnClick = () => {

  counterBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.action === "decrement") {
        value -= 1;
        return counterValue.textContent = value;
        
      }

      if (btn.dataset.action === "increment") {
        value += 1;
        return counterValue.textContent = value;
      }
    });
  });
  
};

counterBtnClick();
