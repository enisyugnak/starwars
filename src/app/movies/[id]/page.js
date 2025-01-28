import Image from "next/image";
import config from "@/services/config";
import { fetcUrl } from "@/services/fetch";
import SectionHeader from "@/ui/section-header";

export default async function MoviesDetail({ params }) {
  const { id } = await params;
  const data = await fetcUrl(`${config.apiUrl}/films/${id}`);

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

  const image = `/movies/episode_${episode_id}.webp`;

  return (
    <div className="grid grid-cols-1 p-5 md:grid-cols-2">
      <section className="flex h-full w-full justify-center md:pr-5">
        <figure className="relative h-full w-full rounded-md bg-slate-700/40 p-4">
          <Image
            src={image}
            width={300}
            height={400}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-cover object-top"
            alt=""
          />
        </figure>
      </section>
      <section>
        <div className="mt-5 w-full md:mt-0">
          <h1 className="text-4xl font-black text-white">{title}</h1>
          <p>Release Date: {release_date}</p>
          <p>Director: {director}</p>
          <p>Producer: {producer}</p>
          <p className="mt-5">{opening_crawl}</p>
        </div>
      </section>
    </div>
  );
}
