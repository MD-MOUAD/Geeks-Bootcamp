// API Configuration
const API_KEY = "df30d17777582b3c3c2bede9";
const SUPPORTED_CODES_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;
const PAIR_CONVERSION_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair`;

const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const switchBtn = document.getElementById("switch-btn");
const convertBtn = document.getElementById("convert-btn");
const conversionResult = document.getElementById("conversion-result");
const conversionRate = document.getElementById("conversion-rate");
const resultContainer = document.getElementById("result-container");
const errorMessage = document.getElementById("error-message");
const loader = document.getElementById("loader");

document.addEventListener("DOMContentLoaded", async () => {
  // Fetch supported currencies and populate dropdowns
  try {
    const currencies = await fetchSupportedCurrencies();
    populateCurrencyDropdowns(currencies);

    if (currencies.some((c) => c[0] === "USD")) fromCurrency.value = "USD";
    if (currencies.some((c) => c[0] === "EUR")) toCurrency.value = "EUR";

    convertCurrency();
  } catch (error) {
    showError("Failed to load currency data. Please try again later.");
  }
});

convertBtn.addEventListener("click", convertCurrency);
switchBtn.addEventListener("click", switchCurrencies);

// Fetch supported currencies from API
async function fetchSupportedCurrencies() {
  try {
    const response = await fetch(SUPPORTED_CODES_URL);
    const data = await response.json();

    if (data.result === "success") {
      return data.supported_codes;
    } else {
      throw new Error(data["error-type"]);
    }
  } catch (error) {
    throw new Error("Failed to fetch currencies: " + error.message);
  }
}

function populateCurrencyDropdowns(currencies) {
  currencies.forEach((currency) => {
    const [code, name] = currency;

    const fromOption = document.createElement("option");
    fromOption.value = code;
    fromOption.textContent = `${code} - ${name}`;
    fromCurrency.appendChild(fromOption);

    const toOption = document.createElement("option");
    toOption.value = code;
    toOption.textContent = `${code} - ${name}`;
    toCurrency.appendChild(toOption);
  });
}

async function convertCurrency() {
  // Get values from inputs
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (isNaN(amount) || amount <= 0) {
    showError("Please enter a valid amount greater than zero.");
    return;
  }

  // Show loader and hide results
  loader.style.display = "block";
  resultContainer.style.display = "none";
  errorMessage.style.display = "none";

  try {
    const url = `${PAIR_CONVERSION_URL}/${from}/${to}/${amount}`;

    const response = await fetch(url);
    const data = await response.json();

    loader.style.display = "none";

    if (data.result === "success") {
      conversionResult.textContent = `${data.conversion_result.toFixed(
        2
      )} ${to}`;
      conversionRate.textContent = `1 ${from} = ${data.conversion_rate.toFixed(
        6
      )} ${to}`;
      resultContainer.style.display = "block";
    } else {
      // Display API error
      showError(`Conversion error: ${data["error-type"]}`);
    }
  } catch (error) {
    loader.style.display = "none";
    showError("Failed to convert currencies. Please try again.");
  }
}

function switchCurrencies() {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;

  convertCurrency();
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
  resultContainer.style.display = "none";
}
