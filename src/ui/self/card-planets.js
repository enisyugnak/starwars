import Image from "next/image";
import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { LuArrowUpRight } from "react-icons/lu";

export default function SelfCardPlanets(props) {
  const { image, terrain, url, name, population } = props.data;
  const endpoint = props.endpoint;
  const urlSplit = url.split("/");
  const itemId = urlSplit.slice(-2)[0];

  return (
    <section className="bg-slate-800/50 rounded-md p-4 mb-4 mr-4 w-auto min-w-48">
      <div className="relative w-full h-40 cursor-pointer overflow-hidden group">
        <Image
          className="object-cover transform group-hover:scale-105 transition duration-500"
          src={`/planets/${itemId}.jpg`}
          fill={true}
          alt=""
        />
      </div>

      <div className="flex justify-between mt-2">
        <div>
          <span className="text-xs  text-neutral-400">Terrain</span>
          <p className="text-xs font-extrabold text-sky-500 uppercase">
            {terrain}
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs  text-neutral-400">Population</span>
          <p className="text-xs font-extrabold text-neutral-400">
            {population}
          </p>
        </div>
      </div>

      <Link
        className="flex items-center mt-5 cursor-pointer group duration-300"
        href={`${endpoint}/${itemId}` || ""}
      >
        <div className="text-2xl font-black">{name}</div>
        <LuArrowUpRight className="size-6 scale-0 ml-1 transform group-hover:scale-125 transition duration-500" />
      </Link>
    </section>
  );
}
