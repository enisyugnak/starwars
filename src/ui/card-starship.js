import Image from "next/image";

export default function CardStarship({ item, onClick = null }) {
  return (
    <div
      className="group relative w-full"
      onClick={onClick ? () => onClick(item) : null}
    >
      <div className="cursor-pointer rounded-md bg-slate-700/60 p-3">
        <figure className="relative aspect-square overflow-hidden">
          <Image
            src={item.image}
            fill
            alt=""
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="relative h-full w-full transform object-cover duration-300 group-hover:scale-110"
          />
        </figure>
      </div>
      <div className="absolute bottom-9 left-3 w-auto rounded-r-md bg-slate-900/80 p-3 text-2xl font-bold text-white sm:text-xl">
        {item.name}
      </div>
    </div>
  );
}
