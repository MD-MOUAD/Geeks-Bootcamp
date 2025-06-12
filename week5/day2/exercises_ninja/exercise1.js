const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gif-form");
const searchInput = document.getElementById("search-term");
const deleteBtn = document.getElementById("delete-all");
const gifContainer = document.getElementById("gif-container");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();

  if (searchTerm) {
    try {
      const gifs = await fetchGifs(searchTerm);
      displayGifs(gifs);
    } catch (error) {
      console.error("Error fetching GIFs:", error);
      alert("Failed to fetch GIFs. Please try again.");
    }
  }
});

deleteBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});

async function fetchGifs(searchTerm) {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(
    searchTerm
  )}&api_key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.data;
}

function displayGifs(gifs) {
  gifs.forEach((gif) => {
    const gifUrl = gif.images.fixed_height.url;
    const gifItem = document.createElement("div");
    gifItem.className = "gif-item";
    gifItem.innerHTML = `<img src="${gifUrl}" alt="${gif.title || "GIF"}">`;
    gifContainer.appendChild(gifItem);
  });
}
