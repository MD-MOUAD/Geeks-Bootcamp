document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("sunrise-form");
  const resultsDiv = document.getElementById("results");
  const presetButtons = document.querySelectorAll(".preset-btn");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const city1 = {
      name: document.getElementById("city1-name").value.trim(),
      lat: document.getElementById("city1-lat").value,
      lng: document.getElementById("city1-lng").value,
    };

    const city2 = {
      name: document.getElementById("city2-name").value.trim(),
      lat: document.getElementById("city2-lat").value,
      lng: document.getElementById("city2-lng").value,
    };

    if (!city1.lat || !city1.lng || !city2.lat || !city2.lng) {
      alert("Please enter valid coordinates for both cities");
      return;
    }

    try {
      const [city1Data, city2Data] = await Promise.all([
        fetchSunriseData(city1.lat, city1.lng),
        fetchSunriseData(city2.lat, city2.lng),
      ]);

      displayResults(city1, city1Data, city2, city2Data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch sunrise data");
    }
  });

  presetButtons.forEach((button) => {
    button.addEventListener("click", function () {
      document.getElementById("city1-name").value = this.dataset.city1;
      document.getElementById("city1-lat").value = this.dataset.lat1;
      document.getElementById("city1-lng").value = this.dataset.lng1;

      document.getElementById("city2-name").value = this.dataset.city2;
      document.getElementById("city2-lat").value = this.dataset.lat2;
      document.getElementById("city2-lng").value = this.dataset.lng2;
    });
  });

  async function fetchSunriseData(lat, lng) {
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== "OK") {
      throw new Error("Bad status");
    }

    return data.results;
  }

  function displayResults(city1, city1Data, city2, city2Data) {
    const city1Name = city1.name;
    const city2Name = city2.name;

    const city1Sunrise = new Date(city1Data.sunrise).toLocaleTimeString();
    const city2Sunrise = new Date(city2Data.sunrise).toLocaleTimeString();

    document.getElementById("city1-result").innerHTML = `
          <h1>${city1Name}</h1><br>
          Coordinates: ${city1.lat}, ${city1.lng}<br>
          Sunrise: ${city1Sunrise}
      `;

    document.getElementById("city2-result").innerHTML = `
          <h1>${city2Name}</h1><br>
          Coordinates: ${city2.lat}, ${city2.lng}<br>
          Sunrise: ${city2Sunrise}
      `;

    const city1Date = new Date(city1Data.sunrise);
    const city2Date = new Date(city2Data.sunrise);

    let comparisonText;
    if (city1Date < city2Date) {
      comparisonText = `${city1Name} has an earlier sunrise than ${city2Name}`;
    } else if (city1Date > city2Date) {
      comparisonText = `${city2Name} has an earlier sunrise than ${city1Name}`;
    } else {
      comparisonText = `Both cities have sunrise at the same time`;
    }

    document.getElementById("comparison-result").textContent = comparisonText;

    resultsDiv.style.display = "block";
  }
});
