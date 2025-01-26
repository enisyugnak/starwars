import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImagesFader({
  images,
  loop = false,
  duration,
  arrows = true,
  pagination = true,
}) {
  const [currIndex, setCurrIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (loop) {
      if (!isHovered) {
        var interval = setInterval(() => {
          nextSlide();
        }, duration || 5000);
      }
      return () => {
        if (interval) clearInterval(interval);
      };
    }
  }, [loop, duration, isHovered]);

  const prevSlide = () => {
    setCurrIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const nextSlide = () => {
    setCurrIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-full"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {/** Image Holder */}
      <Images images={images} currIndex={currIndex} />

      {/** Arrow Buttons */}
      {arrows && (
        <ArrowNavigation
          show={true}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      )}
      {/** Pagination */}
      {pagination && (
        <Pagination show={true} images={images} currIndex={currIndex} />
      )}
    </div>
  );
}

/** Images on the stage */
export function Images({ images, currIndex }) {
  return (
    <div className="relative w-full rounded-md bg-slate-700/60 p-3">
      <div className="relative aspect-square">
        {images.map((item, index) => {
          return (
            <Image
              src={item}
              key={index}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={`cursor-pointer object-cover object-top transition-opacity duration-500 ease-in ${index === currIndex ? "opacity-100" : "opacity-0"}`}
            />
          );
        })}
      </div>
    </div>
  );
}

//** Arrow Navigation */
export function ArrowNavigation({ prevSlide, nextSlide }) {
  return (
    <div className="absolute top-1/2 flex w-full -translate-y-1/2 cursor-pointer justify-between p-3 px-5 align-middle">
      <ArrowButton side={"left"} onClick={prevSlide} />
      <ArrowButton side={"right"} onClick={nextSlide} />
    </div>
  );
}

//** Arrow buttons on Navigation */
export function ArrowButton({ side, onClick }) {
  const buttonSide = {
    left: "M15 19l-7-7 7-7",
    right: "M9 5l7 7-7 7",
    up: "M19 15l-7-7-7 7",
    down: "M5 9l7 7 7-7",
  };
  return (
    <button
      className="rounded-xl bg-slate-700/60 p-3 text-neutral-400 transition duration-300 hover:bg-slate-900"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={buttonSide[side]}
        />
      </svg>
    </button>
  );
}

/** Pagination on Bottom */

export function Pagination({ images, currIndex }) {
  return (
    <div className="mt-4 flex justify-center">
      {images.map((_, index) => (
        <div
          key={index}
          className={`mx-1 h-1 w-10 ${
            index === currIndex
              ? "rounded-xl bg-sky-500"
              : "rounded-xl bg-slate-700"
          } transition-all duration-500 ease-in-out`}
        ></div>
      ))}
    </div>
  );
}
