console.clear();
const form = document.querySelector('[data-js="form"]');
const yourQuestion = document.querySelector('[data-js="your-question"]');
const yourAnswer = document.querySelector('[data-js="your_answer"]');
const yourTag = document.querySelector('[data-js="your-tag"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
});
