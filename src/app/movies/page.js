import CardMovie from "../../feature/card-movie";

export default async function Movies() {
  //await new Promise((resolve) => setTimeout(resolve, 2000)); //loading test
  const response = await fetch("https://swapi.py4e.com/api/films/");
  const data = await response.json();
  const movies = data.results;

  const moviesList = movies.map((item, index) => {
    return <CardMovie key={index} data={item} />;
  });

  return <div className="flex gap-3">{moviesList}</div>;
}
