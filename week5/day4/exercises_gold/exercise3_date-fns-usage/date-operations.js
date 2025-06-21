import { format, addDays } from "date-fns";

export function displayDates() {
  const now = new Date();
  const futureDate = addDays(now, 5);
  const formattedDate = format(futureDate, "yyyy-MM-dd HH:mm:ss");

  console.log("Current date:", now);
  console.log("After adding 5 days:", formattedDate);
}
