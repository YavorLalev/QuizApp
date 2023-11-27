function bookmarkClick(event) {
  const bookmarkIcon = event.target;
  bookmarkIcon.classList.toggle("blue-button");
}
const bookmarkButton = document.querySelector('[data-js="toggle-bookmark"]');
bookmarkButton.addEventListener("click", bookmarkClick);
