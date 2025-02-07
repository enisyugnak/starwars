import IconSvg from "@/ui/icon/icon-svg";
import clsx from "clsx";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const ResponsiveSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(300);
  const containerRef = useRef(null);

  // Calculate image width dynamically
  useEffect(() => {
    const updateSizes = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const imagesPerPage = Math.floor(containerWidth / 300);
        const newImageWidth = containerWidth / imagesPerPage;
        setImageWidth(newImageWidth);
      }
    };
    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  const newPosition = index * imageWidth;
  // Prevent sliding beyond available images
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
    <div className="relative w-full overflow-hidden">
      <div ref={containerRef} className="relative flex w-full">
        <div
          style={{ transform: `translateX(-${newPosition}px)` }}
          className="flex transition-all duration-300"
        >
          {images.map((item, idx) => {
            return (
              <div
                key={idx}
                className="relative aspect-square"
                style={{ width: `${imageWidth}px` }}
              >
                <Image
                  src={item.image}
                  alt={`Image ${idx}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-full w-full object-cover p-5"
                />
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
