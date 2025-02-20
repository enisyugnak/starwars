"use client";
import clsx from "clsx";
import ImagesColumn from "./image-column";
import { useEffect, useState } from "react";

export default function VerticalImageSlider({ images, direction }) {
  const [animate, setAnimate] = useState("");
  useEffect(() => {
    setAnimate(`animate-${direction}`);
  }, [direction]);

  //const animate = `animate-${direction}`;

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-gradient-to-b from-neutral-950 from-0% via-transparent via-20% to-neutral-950 to-100%"></div>
      <div
        className={clsx("absolute z-10 flex flex-col", animate)}
        style={{ animationDuration: "120s" }}
      >
        <ImagesColumn images={images} />
        <ImagesColumn images={images} />
      </div>
    </div>
  );
}
