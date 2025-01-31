"use client";
import SectionHeader from "@/ui/section-header";
import { cleanString } from "@/utils/string";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "./modals";
import { fetcUrl } from "@/services/fetch";
import Loading from "../loading";

export default function StarShipsView({ data }) {
  const [details, setDetails] = useState(null);
  const list =
    data &&
    data.map((item) => {
      const imageName = cleanString(item.name, "_");
      const image = `/starships/${imageName}.webp`;
      return { ...item, image };
    });

  const loadStarShipDetail = async (item) => {
    const data = await fetcUrl(item.url);
    setDetails(data);
  };

  return (
    <section className="w-full">
      <SectionHeader>StarShips</SectionHeader>
      {/** Modal view */}
      <DetailView data={details} setDetails={setDetails} />
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

export function DetailView({ data, setDetails }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (data) {
      setIsOpen(true);
    }
  }, [data]);

  if (data) {
    var cleanName = cleanString(data.name, "_");
  }
  const image = `/starships/${cleanName}.webp`;

  if (!data) return;
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className="grid h-3/4 cursor-default grid-cols-1 gap-5 lg:grid-cols-7">
        {/** Image */}

        <ImageLoader
          image={image}
          alt={image}
          className="p-3 lg:col-span-4"
          figureClass="aspect-video"
          imgClass="rounded-md object-cover"
        />

        {/** Details */}
        <div className="py-3 lg:col-span-3">
          <h2 className="text-2xl font-bold text-white">{data.name}</h2>
          <div className="mb-3 text-base">{data.manufacturer}</div>
          <div className="text-base">
            cost_in_credits {data.cost_in_credits}
          </div>
          <div className="text-base">length:{data.length}</div>
          <div className="text-base">
            max_atmosphering_speed:{data.max_atmosphering_speed}
          </div>
          <div className="text-base">crew: {data.name}</div>
          <div className="text-base">passengers: {data.passengers}</div>
          <div className="text-base">cargo_capacity: {data.cargo_capacity}</div>
          <div className="text-base">consumables: {data.consumables}</div>
          <div className="text-base">MGLT: {data.MGLT}</div>
          <div className="text-base">starship_class: {data.starship_class}</div>
          <div className="text-base">
            hyperdrive_rating: {data.hyperdrive_rating}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export function ImageLoader({
  image,
  alt = "",
  className = "",
  figureClass = "",
  imgClass = "",
}) {
  const [loading, setLoading] = useState(true);
  return (
    <div className={`${className} relative`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-700/60">
          <Loading />
        </div>
      )}
      <figure className={`${figureClass} relative h-full w-full`}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`${imgClass} h-full w-full`}
          onLoad={() => setLoading(false)}
        />
      </figure>
    </div>
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
