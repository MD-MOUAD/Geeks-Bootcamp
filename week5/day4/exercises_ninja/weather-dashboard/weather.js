import axios from "axios";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

export async function getWeather(city) {
  const API_KEY = process.env.OPENWEATHER_API_KEY;

  if (!API_KEY) {
    console.error(chalk.red("ERROR: API key not found in .env"));
    return;
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const { temp } = response.data.main;
    const { description } = response.data.weather[0];

    console.log(chalk.blue.bold(`\n=== Weather in ${city} ===`));
    console.log(chalk.green(`Temperature: ${temp}°C`));
    console.log(chalk.yellow(`Conditions: ${description}`));
  } catch (error) {
    console.error(chalk.red("Error fetching weather:", error.message));
  }
}
