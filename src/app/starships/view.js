import SectionHeader from "@/ui/section-header";
import { cleanString } from "@/utils/string";
import Image from "next/image";

export default function StarShipsView({ data }) {
  const list =
    data &&
    data.map((item) => {
      const imageName = cleanString(item.name, "_");
      const image = `/starships/${imageName}.webp`;
      return { ...item, image };
    });

  return (
    <section className="w-full">
      <SectionHeader>StarShips</SectionHeader>
      <div className="grid-cols grid w-full gap-3 md:grid-cols-2 lg:grid-cols-3">
        {list.map((item, index) => {
          return (
            <div key={index} className="group relative w-full">
              <div className="cursor-pointer rounded-md bg-slate-700/60 p-3">
                <figure className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    fill
                    alt=""
                    className="relative h-full w-full transform object-cover duration-300 group-hover:scale-110"
                  />
                </figure>
              </div>
              <div className="absolute bottom-9 left-3 w-auto rounded-r-md bg-slate-900/80 p-3 text-2xl font-bold text-white sm:text-xl">
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
