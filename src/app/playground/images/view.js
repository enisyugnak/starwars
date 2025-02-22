"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import ResponsiveSlider from "@/ui/image/slider/responsive-slider";
import { addImageToJson } from "@/utils/data";
import Loading from "@/app/loading";
import { LoadingProvider } from "@/context/loading";

const ImagesView = () => {
  const images = [
    { name: "alderaan" },
    { name: "bespin" },
    { name: "cerea" },
    { name: "champala" },
    { name: "corellia" },
  ];

  const planets = [
    {
      name: "coruscant",
      image: "/planets-views/coruscant.webp",
    },
    {
      name: "dagobah",
      image: "/planets-views/dagobah.webp",
    },
    {
      name: "endor",
      image: "/planets-views/endor.webp",
    },
    {
      name: "hoth",
      image: "/planets-views/hoth.webp",
    },
    {
      name: "naboo",
      image: "/planets-views/naboo.webp",
    },
    {
      name: "tatooine",
      image: "/planets-views/tatooine.webp",
    },
    {
      name: "yavin",
      image: "/planets-views/yavin.webp",
    },
  ];

  const listWithImages = addImageToJson(images, "planets");
  const [loadFinished, setLoadFinished] = useState(false);

  return (
    <div className="w-full">
      <ResponsiveSlider
        images={planets}
        initialWidth="400"
        aspect="aspect-video"
      />
      <ImageBase image="/planets/alderaan.webp" alt="" aspect="square" />
      <ImageCard image="/planets/alderaan.webp" onLoad={setLoadFinished} />
    </div>
  );
};

export default ImagesView;

const ContentWithLoader = ({ children }) => {
  return <LoadingProvider>{children}</LoadingProvider>;
};

const ImageCard = ({ image, onLoad = undefined }) => {
  function handleLoad() {
    onLoad?.(false);
  }

  return (
    <div className="relative w-full max-w-[240px] rounded-md bg-slate-800/50 p-4">
      <ImageWithLoader image={image} onLoad={handleLoad} />

      <div className="mt-2 flex justify-between">
        <div>
          <span className="text-xs text-neutral-400">Terrain</span>
          <p className="line-clamp-1 text-xs font-extrabold uppercase text-sky-500">
            hede
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs text-neutral-400">Population</span>
          <p className="text-xs font-extrabold text-neutral-400">90</p>
        </div>
      </div>
      <div className="text-2xl font-black">Name of the pic</div>
    </div>
  );
};

const ImageWithLoader = ({ image, onLoad = undefined }) => {
  const [loading, setLoading] = useState(true);

  function handleLoad() {
    setLoading(false);
    onLoad?.(false);
  }

  return (
    <div className="group relative min-h-[160px] cursor-pointer overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-700/60">
          <Loading />
        </div>
      )}
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="transform object-cover object-top transition duration-500 group-hover:scale-105"
        onLoad={handleLoad}
      />
    </div>
  );
};

const ImageBase = ({ image, alt = "", parentClass, imageClass }) => {
  return (
    <div className={clsx("relative w-[300px]", parentClass)}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={clsx("h-full w-full object-cover", imageClass)}
      />
    </div>
  );
};
