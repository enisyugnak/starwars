"use client";
import Image from "next/image";
import Link from "next/link";

export default function MoviesView({ movies }) {
  return (
    <section>
      <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
        {movies &&
          movies.map((item, index) => {
            const image = `/movies/episode_${item.episode_id}.webp`;
            return <MoviePoster key={index} item={item} image={image} />;
          })}
      </div>
    </section>
  );
}

export function MoviePoster({ item, image }) {
  const release = item.release_date.split("-")[0];
  const parts = item.url.split("/");
  const url = parts[parts.length - 2];
  const link = `/movies/${url}`;

  return (
    <div className="group relative w-full cursor-pointer rounded-md bg-slate-700/40 p-2">
      <Link href={link}>
        <figure className="relative aspect-video min-h-56 w-full">
          <Image
            src={image}
            alt={item.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="relative h-full w-full rounded-md object-cover object-top transition-all duration-300 group-hover:opacity-60 group-hover:ring-2 group-hover:ring-sky-400"
          />
        </figure>
        <div className="absolute bottom-[10%] right-0 rounded-l-lg bg-slate-900/70 py-1 pl-3 pr-8 text-right">
          <div className="text-xl font-black text-white md:text-lg">{`Episode ${item.episode_id}`}</div>
          <div className="text-lg font-black md:text-sm">{`${release}`}</div>
        </div>
      </Link>
    </div>
  );
}
