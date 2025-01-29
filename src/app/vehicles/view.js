import SectionHeader from "@/ui/section-header";
import { cleanString } from "@/utils/string";
import Image from "next/image";

export default function VehiclesView({ data }) {
  const list =
    data &&
    data.map((item) => {
      const imageName = cleanString(item.name, "_");
      const image = `/vehicles/${imageName}.webp`;
      return { ...item, image };
    });

  return (
    <section className="w-full">
      <SectionHeader>Vehicles</SectionHeader>
      <div className="grid-cols grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((item, index) => {
          return (
            <div key={index}>
              <div className="group cursor-pointer rounded-md bg-slate-700/60 p-3">
                <div className="relative h-full w-full overflow-hidden">
                  <figure className="aspect-video">
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
        })}
      </div>
    </section>
  );
}
