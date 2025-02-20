"use client";
import Loading from "@/app/loading";
import RoundedBlock from "@/app/planets/ui/rounded";
import ColorSpecies from "@/app/species/[id]/colors";
import SectionHeader from "@/ui/section-header";
import { cleanString } from "@/utils/string";
import Image from "next/image";
import { useState } from "react";
export default function SpeciesDetail({ data }) {
  const {
    name,
    classification,
    average_height,
    skin_colors,
    hair_colors,
    eye_colors,
    average_lifespan,
    homeworld,
    language,
    people,
    films,
  } = data;

  const imageName = cleanString(name, "_");
  const image = `/species_big/${imageName}.webp`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      {/** Image Section */}
      <section className="relative lg:col-span-8">
        {/** Header */}
        <div className="relative flex items-center gap-3">
          <SectionHeader>{name}</SectionHeader>
          <div className="text-sky-500">{classification}</div>
        </div>

        {/** Image */}

        <ImageHolder src={image} alt={name} />

        {/** Details on Image */}
        {/* <div className="absolute bottom-0 left-0 h-auto w-full bg-teal-800 sm:hidden">
            <div>{designation}</div>
            <div>{skin_colors}</div>
            <div>{hair_colors}</div>
            <div>{eye_colors}</div>
          </div> */}
      </section>
      {/** Details Section */}

      <section className="ml-4 mt-16 w-full space-y-5 lg:col-span-4">
        <div className="flex gap-3">
          <RoundedBlock title="Height">{average_height}</RoundedBlock>
          <RoundedBlock title="Lifespan">{average_lifespan}</RoundedBlock>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col">
            <div className="text-lg font-bold text-white">Language</div>
            <div>{language}</div>
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-bold text-white">Skin Colors</div>
            <div>{skin_colors}</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-bold text-white">Hair Colors</div>
          <ColorSpecies colors={hair_colors} />
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-bold text-white">Eye Colors</div>
          <ColorSpecies colors={eye_colors} />
        </div>
      </section>
    </div>
  );
}

export function ImageHolder({ src, alt, className }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-700/60">
          <Loading />
        </div>
      )}
      <div className="relative aspect-[3/4] h-[calc(100vh-250px)] min-h-[400px] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full rounded-md object-contain object-top"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
}
