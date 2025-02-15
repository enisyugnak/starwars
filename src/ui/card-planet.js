import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { useState } from "react";
import Loading from "@/app/loading";

export default function CardPlanet(props) {
  const { terrain, url, name, population, image } = props.data;
  const endpoint = props.endpoint;
  const [loading, setLoading] = useState(true);
  const itemId = url.split("/").filter(Boolean).pop();
  const href = `${endpoint}/${itemId}`;

  return (
    <section className="w-full min-w-[240px] rounded-md bg-slate-800/50 p-4">
      <Link className="" href={`${href}` || ""}>
        <div className="group relative min-h-[160px] cursor-pointer overflow-hidden">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-700">
              <Loading />
            </div>
          )}
          <Image
            className="transform object-cover object-top transition duration-500 group-hover:scale-105"
            src={image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt=""
            onLoad={() => setLoading(false)}
          />
        </div>
      </Link>
      <div className="mt-2 flex justify-between">
        <div>
          <span className="text-xs text-neutral-400">Terrain</span>
          <p className="line-clamp-1 text-xs font-extrabold uppercase text-sky-500">
            {terrain}
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs text-neutral-400">Population</span>
          <p className="text-xs font-extrabold text-neutral-400">
            {population}
          </p>
        </div>
      </div>

      <Link
        className="group mt-5 flex cursor-pointer items-center duration-300"
        href={`${href}` || ""}
      >
        <div className="text-2xl font-black">{name}</div>
        <LuArrowUpRight className="ml-1 size-6 scale-0 transform transition duration-500 group-hover:scale-125" />
      </Link>
    </section>
  );
}
