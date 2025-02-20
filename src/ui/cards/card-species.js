"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const CardSpecies = ({ item, index, dynoClass }) => {
  const path = usePathname();
  const urlSplit = item.url.split("/");
  const linkId = urlSplit.slice(-2)[0];
  const link = `/species/${linkId}`;

  const pathSplit = path.split("/").slice(-2)[1];
  const pathName = path.split("/").slice(-2)[0];

  const active = pathSplit === linkId;
  const currentLink =
    pathName === "species" && active
      ? "pointer-events-none select-none bg-teal-800/20"
      : "bg-slate-800/20";

  return (
    <Link href={link} className="block">
      <div
        id={`card-${linkId}`}
        className={`${dynoClass} group flex h-[90px] w-full min-w-[240px] cursor-pointer items-center gap-4 rounded-lg border border-slate-800/70 hover:bg-teal-800/20 sm:gap-2 ${currentLink}`}
      >
        {/** Image */}

        <div
          className={
            "ml-3 min-h-[60px] min-w-[60px] overflow-hidden rounded-full border-4 border-slate-800/70"
          }
        >
          <figure className="relative overflow-hidden rounded-full">
            <Image
              src={item.image}
              alt=""
              width={64}
              height={64}
              priority={true}
              className="transform object-cover duration-300 group-hover:scale-125"
            />
          </figure>
        </div>
        {/** Details */}
        <div className="flex flex-col">
          <div className="break-words text-lg font-extrabold text-white group-hover:text-teal-800">
            {item.name}
          </div>
          <p className="text-xs uppercase text-sky-500">{`${item.classification}`}</p>
        </div>
        {/** Numbers */}
        <div className="ml-auto mr-6 transform text-[30px] font-[700] text-neutral-400/10 duration-300 group-hover:scale-75 sm:text-[50px]">
          {index}
        </div>
      </div>
    </Link>
  );
};
