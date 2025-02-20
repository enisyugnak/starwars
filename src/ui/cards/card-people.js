import Image from "next/image";
import { getGender } from "../icon/gender";
import Link from "next/link";

export function CardPeople({ item }) {
  function getPersonId(url) {
    const urlSplit = url.split("/");
    const itemId = urlSplit.slice(-2)[0];
    return `/people/${itemId}`;
  }

  return (
    <Link href={getPersonId(item.url)}>
      <div className="group relative flex items-end gap-5 overflow-hidden rounded-md border border-slate-700/60 bg-slate-800/20 p-1">
        <div className="absolute right-2 top-2">{getGender(item.gender)}</div>

        <div className="overflow-hidden rounded-md border-slate-700/60">
          <div className="relative h-full min-h-20 w-full min-w-16">
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="z-10 flex flex-col">
          <div className="text-lg font-extrabold text-white transition duration-300 group-hover:-translate-y-4 lg:text-[1.4vw]">
            {item.name}
          </div>
          <p className="text-sm text-neutral-400 transition delay-75 duration-300 group-hover:-translate-y-4">{`Birth Year: ${item.birth_year}`}</p>
        </div>
      </div>
    </Link>
  );
}
