const formElem = document.getElementById("component__form");
const formErrorElems = document.querySelectorAll(".component__form > *");
const inputElem = document.querySelector(".component__input");

inputElem.addEventListener("click", () => {
  if (inputElem.dataset.valid === "false")
    return formErrorElems.forEach((e) => {
      e.dataset.valid = "true";
    });
});

formElem.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputElem == null) return;
  if (validateEmail(inputElem))
    return formErrorElems.forEach((e) => {
      e.dataset.valid = "true";
    });
  return formErrorElems.forEach((e) => {
    e.dataset.valid = "false";
  });
});

function validateEmail(emailInputElem) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    emailInputElem.value
  );
}
