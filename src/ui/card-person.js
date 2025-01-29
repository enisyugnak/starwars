import Image from "next/image";
import { getGender } from "./icon/gender";

export function CardPerson({ item }) {
  return (
    <div className="flex items-center gap-5 border-t border-slate-800/70 py-3 last:border-b">
      <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-slate-800/70">
        <div className="relative h-full w-full">
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
      <div className="ml-auto">{getGender(item.gender)}</div>
    </div>
  );
}
