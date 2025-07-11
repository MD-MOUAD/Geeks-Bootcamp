async function fetchHilariousGifs() {
  const apiUrl =
    "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error fetching gifs:", error);
  }
}

fetchHilariousGifs();
