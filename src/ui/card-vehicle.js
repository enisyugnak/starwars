import Image from "next/image";

export default function CardVehicle({ item }) {
  return (
    <div>
      <div className="group cursor-pointer rounded-md bg-slate-700/60 p-3">
        <div className="relative h-full w-full overflow-hidden">
          <figure className="relative aspect-video">
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="relative h-full w-full transform object-cover object-center duration-300 group-hover:scale-110"
            />
          </figure>
        </div>
      </div>
      <div className="mx-auto mt-2 text-center text-lg font-bold sm:text-base">
        {item.name}
      </div>
    </div>
  );
}
