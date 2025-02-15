"use client";

import IconSvg from "@/ui/icon/icon-svg";
import clsx from "clsx";
import Image from "next/image";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

const ResponsiveSlider = ({ images }) => {
  const initialWidth = 300;
  const [index, setIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(initialWidth);
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef(null);

  const updateSizes = () => {
    if (containerRef.current) {
      requestAnimationFrame(() => {
        const containerWidth = containerRef.current.offsetWidth;
        const imagesPerPage = Math.floor(containerWidth / initialWidth);
        const newImageWidth = containerWidth / imagesPerPage;
        setImageWidth(newImageWidth);
        !isReady && setIsReady(true);
      });
    }
  };

  // Ensure ref exists before running layout effect
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    updateSizes();
  }, []);

  useEffect(() => {
    const handleResize = () => updateSizes();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const newPosition = index * imageWidth;
  const imagesPerPage =
    Math.floor(containerRef.current?.offsetWidth / imageWidth) || 1;
  const maxIndex = Math.max(0, images.length - imagesPerPage);

  const nextSlide = () => {
    setIndex(Math.min(index + 1, maxIndex));
  };

  const prevSlide = () => {
    setIndex(Math.max(index - 1, 0));
  };

  return (
    <div
      className={`relative mb-10 w-full overflow-hidden transition-opacity duration-300 ease-in-out ${isReady ? "block opacity-100" : "invisible opacity-0"}`}
    >
      <div ref={containerRef} className="relative flex w-full">
        <div
          style={{ transform: `translateX(-${newPosition}px)` }}
          className="flex transition-all duration-500 ease-in-out"
        >
          {images.map((item, idx) => {
            return (
              <div
                key={idx}
                className="group relative cursor-pointer p-2"
                style={{ width: `${imageWidth}px` }}
              >
                <div className="relative aspect-square overflow-hidden rounded-md transition duration-200 ease-in hover:scale-90">
                  <Image
                    src={item.image}
                    alt={`Image ${idx}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute bottom-5 left-0 bg-slate-900/80 px-3 py-2 text-2xl font-bold">
                    {item.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <ArrowButton onClick={prevSlide} side="left" />
      <ArrowButton onClick={nextSlide} side="right" />
    </div>
  );
};

export default ResponsiveSlider;

function ArrowButton({ onClick, side }) {
  const arrowSide = side === "left" ? "leftArrow" : "rightArrow";
  return (
    <button
      onClick={onClick}
      className={clsx(
        "absolute top-1/2 -translate-y-1/2 transform bg-black p-2 text-white",
        `${side}-0`,
      )}
    >
      <IconSvg type={arrowSide} />
    </button>
  );
}
