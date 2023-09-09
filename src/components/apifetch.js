export async function fetchTickets() {
  const response = await fetch(
    "https://api.quicksell.co/v1/internal/frontend-assignment"
  );
  const data = await response.json();
  return data;
}
