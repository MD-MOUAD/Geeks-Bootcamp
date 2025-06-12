const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const gifContainer = document.getElementById("gif-container");

const form = document.getElementById("gif-form");
const searchInput = document.getElementById("search-term");
const deleteAllBtn = document.getElementById("delete-all");

async function fetchRandomGif(searchTerm) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?tag=${encodeURIComponent(
        searchTerm
      )}&api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching random GIF:", error);
    throw error;
  }
}

function displayGif(gif) {
  const gifItem = document.createElement("div");
  gifItem.className = "gif-item";

  const img = document.createElement("img");
  img.src = gif.images.original.url;
  img.alt = gif.title;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "DELETE";
  deleteBtn.addEventListener("click", () => {
    gifItem.remove();
  });

  gifItem.appendChild(img);
  gifItem.appendChild(deleteBtn);
  gifContainer.appendChild(gifItem);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();

  if (searchTerm) {
    try {
      const gif = await fetchRandomGif(searchTerm);
      displayGif(gif);
      searchInput.value = "";
    } catch (error) {
      alert("Failed to fetch GIF. Please try again.");
    }
  }
});

deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
