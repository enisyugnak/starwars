"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CardMovie({ data }) {
  const { title, release_date, director, episode_id } = data;

  const router = useRouter();
  const cardClikced = () => {
    router.push(`movies/${episode_id}`);
  };

  return (
    <div
      className="card bg-base-200 image-full h-80 shadow-xl cursor-pointer"
      onClick={cardClikced}
    >
      <div>
        <Image
          src={`/movies/episode-${episode_id}.jpg`}
          layout="fill"
          objectFit="contain"
          alt=""
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
}
