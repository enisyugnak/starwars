"use client";
import SelfButton from "@/ui/button";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import ResponsiveSlider from "./responsive-slider";
import { addImageToJson } from "@/utils/data";

const ImagesView = () => {
  const images = [
    { name: "alderaan" },
    { name: "bespin" },
    { name: "cerea" },
    { name: "champala" },
    { name: "corellia" },
  ];
  const listWithImages = addImageToJson(images, "planets");

  return (
    <div className="w-full">
      <ResponsiveSlider images={listWithImages} />
      <ImageBase image="/planets/alderaan.webp" alt="" aspect="square" />
    </div>
  );
};

export default ImagesView;

const ImageBase = ({
  image,
  alt = "",
  aspect = "auto",
  className,
  imageClass,
}) => {
  const aspectChoice = {
    video: "aspect-video",
    square: "aspect-square",
    auto: "aspect-auto",
  };

  return (
    <div
      className={clsx("relative w-[300px]", aspectChoice[aspect], className)}
    >
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
