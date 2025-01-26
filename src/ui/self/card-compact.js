import Image from "next/image";
import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { LuArrowUpRight } from "react-icons/lu";

export default function SelfCardCompact(props) {
  const { data } = props;

  return (
    <section className="bg-slate-800/50 rounded-md p-5 mb-4 mr-4">
      <div className="relative w-64 h-40 cursor-pointer overflow-hidden group">
        <Image
          className="object-cover transform group-hover:scale-105 transition duration-500"
          src={data.image}
          fill={true}
          alt=""
        />
      </div>

      <div className="flex justify-between uppercase mt-3">
        <div className="text-xs font-extrabold text-sky-500 uppercase">
          <BiWorld className="inline-block" /> {data.home_world}
        </div>
        <div className="text-xs font-extrabold text-neutral-400">
          {data.species}
        </div>
      </div>
      <Link
        className="flex items-center mt-5 cursor-pointer group duration-300"
        href={data.endpoint || ""}
      >
        <div className="text-2xl font-black">{data.name}</div>
        <LuArrowUpRight className="size-6 scale-0 ml-1 transform group-hover:scale-125 transition duration-500" />
      </Link>
    </section>
  );
}
