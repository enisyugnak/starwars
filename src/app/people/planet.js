export default async function Planet({ homeworld }) {
  const response = await fetch(homeworld);
  const result = await response.json();

  return <div>planet: {result.name}</div>;
}
