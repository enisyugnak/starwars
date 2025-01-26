import Image from "next/image";

export default async function MoviesDetail({ params }) {
  const { id } = await params;
  const response = await fetch("https://swapi.py4e.com/api/films/" + id);

  const data = await response.json();

  const {
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
    characters,
    planets,
    starships,
    vehicles,
    species,
  } = data;

  const image = `/movies/episode-${episode_id}.jpg`;

  return (
    <div className="container mx-auto columns-2">
      <div className="w-full">
        <Image src={image} width={180} height={320} alt="" />
        <h2 className="font-bold">{title}</h2>
        <p>Release Date: {release_date}</p>
      </div>
      <div className="w-full">
        <p>Director: {director}</p>
        <p>Producer: {producer}</p>
        <p>{opening_crawl}</p>
      </div>
    </div>
  );
}
