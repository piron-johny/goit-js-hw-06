//1. Обработка отправки формы form.login - form должна быть по событию submit.
//2. При отправке формы страница не должна перезагружаться.
//3. Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
//4. Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства.Для доступа к элементам формы используй свойство elements.
//5. Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const form = document.querySelector(".login-form");

const handleSubmit = function (event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("All fields are required");
  }
  if (email.value !== "" || password.value !== "") {
    return (
      form.insertAdjacentHTML(
        "beforebegin",
        `<div class="alert"><p>Welcome!</p></div>`
      ),
      console.log({ email: email.value, password: password.value }),
      event.currentTarget.reset()
    );
  }
};

form.addEventListener("submit", handleSubmit);
