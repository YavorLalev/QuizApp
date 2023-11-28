const bodyElement = document.querySelector('[data-js="body"]');
const buttonOne = document.querySelector('[data-js="toggle-button"]');

buttonOne.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
