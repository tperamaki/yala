export async function getRestaurants() {
  const res = await fetch('http://localhost:3000/restaurants/api');

  if (!res.ok) {
    throw new Error('Failed to fetch restaurants');
  }

  return res.json();
}
