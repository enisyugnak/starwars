import Image from "next/image";
import { getGender } from "../icon/gender";
import Link from "next/link";

export const CardPersonBig = ({ item }) => {
  const id = item.url.split("/").slice(-2)[0];
  const link = `/people/${id}`;
  return (
    <Link href={link} className="block">
      <div className="group flex h-[90px] w-full min-w-[240px] cursor-pointer items-center gap-4 rounded-lg border-2 border-slate-800/70 bg-slate-800/20 hover:bg-teal-800/20 sm:gap-2">
        <div className="min-h-full min-w-[64px] overflow-hidden rounded-l-md border-slate-800/70">
          <div className="relative h-[86px] overflow-hidden rounded-l-md">
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-full transform object-cover duration-300 group-hover:scale-125"
            />
          </div>
        </div>
        <div className="ml-2 flex flex-col">
          <div className="break-words text-lg font-extrabold text-white group-hover:text-teal-800">
            {item.name}
          </div>
          <p className="text-sm text-neutral-400">
            Birth Year: {`${item.birth_year}`}
          </p>
        </div>
        <div className="ml-auto mr-2">{getGender(item.gender)}</div>
      </div>
    </Link>
  );
};
