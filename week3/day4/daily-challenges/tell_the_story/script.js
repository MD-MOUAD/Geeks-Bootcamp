const form = document.getElementById("libform");
const libButton = document.getElementById("lib-button");
const storyOutput = document.getElementById("story");

const nounInput = document.getElementById("noun");
const adjectiveInput = document.getElementById("adjective");
const personInput = document.getElementById("person");
const verbInput = document.getElementById("verb");
const placeInput = document.getElementById("place");

const generateStory = (noun, adjective, person, verb, place) => {
  const templates = [
    `${person} went to ${place} with a ${adjective} ${noun}. Together they decided to ${verb} all day.`,
    `In ${place}, ${person} found a ${adjective} ${noun} and couldn't resist to ${verb} it immediately.`,
    `${person} loves to ${verb} every ${adjective} ${noun} they find at ${place}.`,
  ];

  const randomIndex = Math.floor(Math.random() * templates.length);
  return templates[randomIndex];
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const noun = nounInput.value.trim();
  const adjective = adjectiveInput.value.trim();
  const person = personInput.value.trim();
  const verb = verbInput.value.trim();
  const place = placeInput.value.trim();

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all the fields!");
    return;
  }

  const story = generateStory(noun, adjective, person, verb, place);
  storyOutput.textContent = story;
});
