function bookmarkClick(event) {
  const bookmarkIcon = event.target;
  bookmarkIcon.classList.toggle("blue-button");
}
const bookmarkButton = document.querySelector('[data-js="toggle-bookmark"]');
bookmarkButton.addEventListener("click", bookmarkClick);

const showAnswerButton = document.querySelector('[data-js="answer-button"]');
const pElement = document.querySelector('[data-js="answer"]');

showAnswerButton.addEventListener("click", () => {
  pElement.classList.toggle("hidden");
  showAnswerButton.textContent = "hide answer";
});
