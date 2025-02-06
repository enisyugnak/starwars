import useClickOutside from "@/hooks/click-outside";
import Modal from "@/ui/modal";
import { cleanString } from "@/utils/string";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function StarshipDetails({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalPage = useClickOutside(() => setIsOpen(false));
  useEffect(() => {
    if (data) {
      setIsOpen(true);
    }
  }, [data]);

  const cleanName = data && cleanString(data.name, "_");
  const image = `/starships/${cleanName}.webp`;

  if (!data) return;

  return (
    <Modal isOpen={isOpen}>
      <div
        ref={modalPage}
        className="grid h-3/4 cursor-default grid-cols-1 gap-5 lg:grid-cols-7"
      >
        {/** Image */}

        <ImageLoader image={image} alt={image} className="p-3 lg:col-span-4" />

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

export function ImageLoader({ image, alt = "", className = "" }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className={`${className} relative text-white`}>
      {loading && "loading"}
      <figure className="relative aspect-video h-full w-full rounded-md">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover"
          onLoad={() => setLoading(false)}
        />
      </figure>
    </div>
  );
}
