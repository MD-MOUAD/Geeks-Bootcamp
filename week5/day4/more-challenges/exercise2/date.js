export const minutesLived = (birthdate) => {
  const birthDate = new Date(birthdate);
  const now = new Date();
  const diffMs = now - birthDate;
  return Math.floor(diffMs / (1000 * 60));
};
