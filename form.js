console.clear();

const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector('[data-js="card-container"]');
const textInputQuestion = document.querySelector('[data-js="card-question"]');
const textInputAnswer = document.querySelector('[data-js="card-answer"]');
const textInputTag = document.querySelector('[data-js="card-tag"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  cardContainer.innerHTML = "";

  const newCard = document.createElement("li");
  newCard.classList.add("card");

  const questionText = textInputQuestion.value;
  const header = document.createElement("h2");
  header.textContent = questionText;

  const answerText = textInputAnswer.value;
  const paragraph = document.createElement("p");
  paragraph.textContent = answerText;

  //const data = {
  // tags: ["html", "js", "css"],
  //};

  const tagText = textInputTag.value;
  const tagList = document.createElement("ul");
  tagList.classList.add("card-tags");

  //data.tags.forEach((tagName) => {
  const tag = document.createElement("li");
  tag.classList.add("tag");
  tag.textContent = tagText;
  tagList.append(tag);
  //});

  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = "Show answer";

  button.addEventListener("click", () => {
    console.log("iT works");
  });

  const bookmark = document.createElement("div");
  bookmark.innerHTML = `<button type="button">
  <img src="assets/bookmark_120208.png" class="card-bookmark" ></button>`;

  cardContainer.append(newCard);
  newCard.append(header);
  newCard.append(paragraph);
  newCard.append(tagList);
  newCard.append(button);
  newCard.append(bookmark);
});
