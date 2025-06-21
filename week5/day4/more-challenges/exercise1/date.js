export function timeUntilJanuaryFirst() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const janFirst = new Date(nextYear, 0, 1); // January is month 0

  const diffMs = janFirst - now;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = new Date(diffMs).getUTCHours();
  const diffMinutes = new Date(diffMs).getUTCMinutes();
  const diffSeconds = new Date(diffMs).getUTCSeconds();

  return `January 1st is in ${diffDays} days and ${diffHours}:${diffMinutes}:${diffSeconds} hours`;
}
