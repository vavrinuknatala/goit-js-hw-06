const form = document.querySelector(".login-form");
form.addEventListener("submit", handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Fill in all the fields!");
  }
  const dataFormValue = {};
  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    dataFormValue[name] = value;
  });
  console.log(dataFormValue);
  form.reset();
}
