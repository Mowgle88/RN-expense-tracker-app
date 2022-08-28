export function getFormattedDate(date: Date) {
  const fullYear = date.getFullYear();
  const mounth = date.getMonth() + 1;
  const day = date.getDate(); 
  return `${fullYear}-${mounth.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
}