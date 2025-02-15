import Image from "next/image";
import { getGender } from "./icon/gender";
import Link from "next/link";

export function CardPerson({ item }) {
  const id = item.url.split("/").slice(-2)[0];
  const link = `/people/${id}`;

  return (
    <Link href={link} className="group">
      <div className="flex items-center gap-5 border-t border-slate-800/70 py-3 transition duration-300 last:border-b group-hover:bg-slate-900/70">
        <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-slate-800/70">
          <div className="relative h-full w-full transform duration-300 ease-in group-hover:scale-125">
            <Image
              src={item.image}
              alt=""
              width={60}
              height={60}
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="break-words text-lg font-extrabold text-white">
            {item.name}
          </div>
          <p className="text-sm text-neutral-400">{`Birth Year: ${item.birth_year}`}</p>
        </div>
        <div className="ml-auto transition duration-300 ease-in group-hover:-translate-x-8 group-hover:scale-125">
          {getGender(item.gender)}
        </div>
      </div>
    </Link>
  );
}
