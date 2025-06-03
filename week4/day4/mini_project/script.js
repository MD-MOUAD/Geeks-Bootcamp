let quotes = [
  {
    id: 0,
    author: "Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    likes: 0,
  },
  {
    id: 1,
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
    likes: 0,
  },
  {
    id: 2,
    author: "Marilyn Monroe",
    quote:
      "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
    likes: 0,
  },
  {
    id: 3,
    author: "Marcus Aurelius",
    quote:
      "You have power over your mind - not outside events. Realize this, and you will find strength.",
    likes: 0,
  },
];

const quoteDisplay = document.getElementById("quoteDisplay");
const charWithSpacesBtn = document.getElementById("charWithSpacesBtn");
const charWithoutSpacesBtn = document.getElementById("charWithoutSpacesBtn");
const wordCountBtn = document.getElementById("wordCountBtn");
const likeBtn = document.getElementById("likeBtn");
const addQuoteForm = document.getElementById("addQuoteForm");
const newQuoteInput = document.getElementById("newQuote");
const newAuthorInput = document.getElementById("newAuthor");
const filterForm = document.getElementById("filterForm");
const filterAuthorInput = document.getElementById("filterAuthor");
const filterNav = document.getElementById("filterNav");
const prevQuoteBtn = document.getElementById("prevQuoteBtn");
const nextQuoteBtn = document.getElementById("nextQuoteBtn");

let lastQuoteId = null;
let currentQuote = null;
let filteredQuotes = [];
let filteredIndex = 0;

const renderQuote = (quoteObj) => {
  if (!quoteObj) {
    quoteDisplay.innerHTML = "<p>No quote to display.</p>";
    currentQuote = null;
    return;
  }
  currentQuote = quoteObj;
  quoteDisplay.innerHTML = `
    <div class="quote-container">
      <div class="quote-box">
      <button class="generate-btn" onclick={handleGenerateBtn()}>Generate Quote</button>
      <p class="quote">
        <span class="quote-icon">❝</span>
        ${quoteObj.quote}
      </p>
      <p class="author">${quoteObj.author}</p>
      <span class="likes">❤️ ${quoteObj.likes}</span>
    </div>
  </div>
  `;
};

function generateRandomQuote() {
  console.log("first");
  if (quotes.length === 0) {
    quoteDisplay.innerHTML = "<p>No quotes available.</p>";
    currentQuote = null;
    return;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (quotes[randomIndex].id === lastQuoteId && quotes.length > 1);

  lastQuoteId = quotes[randomIndex].id;
  renderQuote(quotes[randomIndex]);
}

function countCharsWithSpaces() {
  if (!currentQuote) return alert("Generate or select a quote first.");
  alert(`Characters (with spaces): ${currentQuote.quote.length}`);
}

function countCharsWithoutSpaces() {
  if (!currentQuote) return alert("Generate or select a quote first.");
  const count = currentQuote.quote.replace(/\s/g, "").length;
  alert(`Characters (no spaces): ${count}`);
}

function countWords() {
  if (!currentQuote) return alert("Generate or select a quote first.");
  const words = currentQuote.quote.trim().split(/\s+/).length;
  alert(`Number of words: ${words}`);
}

function likeCurrentQuote() {
  if (!currentQuote) return alert("Generate or select a quote first.");

  const index = quotes.findIndex((q) => q.id === currentQuote.id);
  if (index !== -1) {
    quotes[index].likes++;
    renderQuote(quotes[index]);
  }
}

function addNewQuote(event) {
  event.preventDefault();
  const newQuoteText = newQuoteInput.value.trim();
  const newAuthorText = newAuthorInput.value.trim();

  if (!newQuoteText || !newAuthorText) {
    alert("Please fill both Quote and Author fields.");
    return;
  }

  const newId = quotes.length ? Math.max(...quotes.map((q) => q.id)) + 1 : 0;

  const newQuoteObj = {
    id: newId,
    author: newAuthorText,
    quote: newQuoteText,
    likes: 0,
  };

  quotes.push(newQuoteObj);
  alert("Quote added!");
  addQuoteForm.reset();

  renderQuote(newQuoteObj);

  filteredQuotes = [];
  filterNav.style.display = "none";
}

function filterQuotesByAuthor(event) {
  event.preventDefault();
  const authorName = filterAuthorInput.value.trim().toLowerCase();
  if (!authorName) {
    alert("Please enter an author name to filter.");
    return;
  }

  filteredQuotes = quotes.filter((q) => q.author.toLowerCase() === authorName);

  if (filteredQuotes.length === 0) {
    quoteDisplay.innerHTML = `<p>No quotes found for author: "${authorName}".</p>`;
    filterNav.style.display = "none";
    return;
  }

  filteredIndex = 0;
  renderQuote(filteredQuotes[filteredIndex]);
  filterNav.style.display = "block";
}

function showPreviousFilteredQuote() {
  if (filteredQuotes.length === 0) return;
  filteredIndex =
    (filteredIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
  renderQuote(filteredQuotes[filteredIndex]);
}

function showNextFilteredQuote() {
  if (filteredQuotes.length === 0) return;
  filteredIndex = (filteredIndex + 1) % filteredQuotes.length;
  renderQuote(filteredQuotes[filteredIndex]);
}

const handleGenerateBtn = () => {
  filteredQuotes = [];
  filterNav.style.display = "none";
  generateRandomQuote();
};

charWithSpacesBtn.addEventListener("click", countCharsWithSpaces);
charWithoutSpacesBtn.addEventListener("click", countCharsWithoutSpaces);
wordCountBtn.addEventListener("click", countWords);
likeBtn.addEventListener("click", likeCurrentQuote);
addQuoteForm.addEventListener("submit", addNewQuote);
filterForm.addEventListener("submit", filterQuotesByAuthor);
prevQuoteBtn.addEventListener("click", showPreviousFilteredQuote);
nextQuoteBtn.addEventListener("click", showNextFilteredQuote);
