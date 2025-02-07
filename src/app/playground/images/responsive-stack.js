import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const ResponsiveStack = ({ images }) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  // Determine image width and how many images fit based on container width
  const getImageWidth = () => 300; // Each image is 300px wide
  const containerWidth = containerRef.current
    ? containerRef.current.offsetWidth
    : 0;
  const imagesPerPage = Math.floor(containerWidth / getImageWidth());

  // Calculate the new position for the sliding effect
  const newPosition = index * getImageWidth();

  // Prevent sliding beyond the available images
  const maxIndex = Math.max(0, images.length - imagesPerPage);

  const nextSlide = () => {
    setIndex(Math.min(index + 1, maxIndex));
  };

  const prevSlide = () => {
    setIndex(Math.max(index - 1, 0));
  };

  useEffect(() => {
    // Reset index when the window is resized
    const handleResize = () => {
      setIndex(0); // Reset to first image on resize
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="relative flex w-full gap-3 overflow-hidden border border-violet-600"
      ref={containerRef}
    >
      <div
        style={{ transform: `translateX(-${newPosition}px)` }}
        className="flex transition-all duration-300"
      >
        {images.map((item, idx) => {
          return (
            <div key={idx} className="relative aspect-video h-auto w-[300px]">
              <Image
                src={item.image}
                fill
                alt={`Image ${idx}`}
                className="h-full w-full border border-teal-500 object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-black p-2 text-white"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-black p-2 text-white"
      >
        Next
      </button>
    </div>
  );
};

export default ResponsiveStack;
