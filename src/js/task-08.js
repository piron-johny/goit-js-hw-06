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
