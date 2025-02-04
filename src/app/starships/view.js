"use client";
import SectionHeader from "@/ui/section-header";
import { addImageToJson } from "@/utils/data";
import { fetcUrl } from "@/services/fetch";
import { useState } from "react";
import Image from "next/image";
import StarshipDetails from "./details";

export default function StarShipsView({ data }) {
  const [details, setDetails] = useState(null);
  const list = data && addImageToJson(data, "starships");

  const loadStarShipDetail = async (item) => {
    const details = await fetcUrl(item.url);
    setDetails(details);
  };

  return (
    <section className="w-full">
      <SectionHeader>StarShips</SectionHeader>
      {/** Modal view */}
      <StarshipDetails data={details} />
      {/** Content */}
      <div className="grid-cols grid w-full gap-3 md:grid-cols-2 lg:grid-cols-3">
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="group relative w-full"
              onClick={() => loadStarShipDetail(item)}
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
        })}
      </div>
    </section>
  );
}

//   {
//     "name": "CR90 corvette",
//     "model": "CR90 corvette",
//     "manufacturer": "Corellian Engineering Corporation",
//     "cost_in_credits": "3500000",
//     "length": "150",
//     "max_atmosphering_speed": "950",
//     "crew": "30-165",
//     "passengers": "600",
//     "cargo_capacity": "3000000",
//     "consumables": "1 year",
//     "hyperdrive_rating": "2.0",
//     "MGLT": "60",
//     "starship_class": "corvette",
//     "pilots": [],
//     "films": [
//         "https://swapi.py4e.com/api/films/1/",
//         "https://swapi.py4e.com/api/films/3/",
//         "https://swapi.py4e.com/api/films/6/"
//     ],
//     "created": "2014-12-10T14:20:33.369000Z",
//     "edited": "2014-12-20T21:23:49.867000Z",
//     "url": "https://swapi.py4e.com/api/starships/2/"
// }
