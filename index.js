// Bookmark toggle function
const toggleBookmark = document.querySelector('[data-js="toggle-bookmark"]');

toggleBookmark.addEventListener("click", () => {
  toggleBookmark.classList.toggle("blue-button");
});

// Answer-button toggle function
const showAnswerButton = document.querySelector('[data-js="answer-button"]');
const pElement = document.querySelector('[data-js="answer"]');

showAnswerButton.addEventListener("click", () => {
  pElement.classList.toggle("hidden");
  if (showAnswerButton.innerHTML === "Hide answer") {
    showAnswerButton.textContent = "Show answer";
  } else {
    showAnswerButton.textContent = "Hide answer";
  }
});
