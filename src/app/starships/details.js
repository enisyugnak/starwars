import useClickOutside from "@/hooks/click-outside";
import Modal from "@/ui/modal";
import { cleanString } from "@/utils/string";
import Image from "next/image";
import { useEffect, useState } from "react";
import RoundedBlock from "../planets/ui/rounded";

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
      <div ref={modalPage} className="grid grid-cols-1 gap-3 lg:grid-cols-7">
        {/** Image */}

        <ImageLoader
          image={image}
          alt={image}
          className="lg:col-span-4 lg:p-3"
        />

        {/** Details */}
        <div className="m-5 flex flex-col lg:col-span-3">
          <h2 className="text-3xl font-bold text-white">{data.name}</h2>

          <div className="mb-5 text-sm text-white">
            {data.starship_class}
            <span className="text-neutral-400"> / {data.manufacturer}</span>
          </div>

          <InfoLine title="Cost">{data.cost_in_credits}</InfoLine>
          <InfoLine title="Cargo Capacity">{data.cargo_capacity}</InfoLine>
          <InfoLine title="Consumables">{data.consumables}</InfoLine>

          <div className="mt-auto flex gap-1 pt-3 sm:gap-3">
            <RoundedBlock title="Crew">{data.crew}</RoundedBlock>
            <RoundedBlock title="Passengers">{data.passengers}</RoundedBlock>
            <RoundedBlock title="Speed">
              {data.max_atmosphering_speed}
            </RoundedBlock>
            <RoundedBlock title="Length">{data.length}</RoundedBlock>
          </div>
        </div>
      </div>
    </Modal>
  );
}

const InfoLine = ({ title, children }) => {
  return (
    <div className="text-base">
      <span className="text-white">{title}: </span> {children}
    </div>
  );
};

export function ImageLoader({ image, alt = "", className = "" }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className={`${className} relative text-white`}>
      {loading && "loading"}
      <figure className="relative aspect-video w-full overflow-hidden rounded-md md:h-full">
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
