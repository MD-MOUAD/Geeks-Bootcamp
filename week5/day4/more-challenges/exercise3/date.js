import axios from "axios";
import { formatDistanceToNow } from "date-fns";

const holidays = [
  { name: "New Year", date: new Date(new Date().getFullYear() + 1, 0, 1) },
  { name: "Christmas", date: new Date(new Date().getFullYear(), 11, 25) },
];

export function getNextHoliday() {
  const now = new Date();
  const nextHoliday = holidays
    .map((holiday) => ({
      ...holiday,
      date:
        holiday.date < now
          ? new Date(
              holiday.date.getFullYear() + 1,
              holiday.date.getMonth(),
              holiday.date.getDate()
            )
          : holiday.date,
    }))
    .sort((a, b) => a.date - b.date)[0];

  return {
    today: now.toLocaleDateString(),
    nextHoliday: nextHoliday.name,
    timeLeft: formatDistanceToNow(nextHoliday.date, { includeSeconds: true }),
  };
}

// Bonus: Fetch holidays from API
export async function getNextHolidayFromAPI() {
  try {
    const response = await axios.get(
      "https://date.nager.at/api/v3/NextPublicHolidays/US"
    );
    const nextHoliday = response.data[0];
    return {
      today: new Date().toLocaleDateString(),
      nextHoliday: nextHoliday.name,
      timeLeft: formatDistanceToNow(new Date(nextHoliday.date), {
        includeSeconds: true,
      }),
    };
  } catch (error) {
    console.error("Failed to fetch holidays:", error.message);
    return getNextHoliday();
  }
}
