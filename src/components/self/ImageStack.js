import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ImageStack({ images }) {
  const [currIndex, setCurrIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    setCurrIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const nextSlide = () => {
    setCurrIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative h-full w-full"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {/** Image Holder */}
      <div className="relative w-full rounded-md bg-slate-700 p-3">
        <div className="relative aspect-square w-full">
          <Image
            src={images[currIndex]}
            alt=""
            fill
            sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            className="cursor-pointer object-cover"
          />
        </div>
      </div>
      {/** Arrow Buttons */}
      <div className="absolute top-1/2 flex w-full justify-between">
        <button
          className="group transform rounded-xl bg-[#111927] p-3 text-white hover:bg-[#1a222f]"
          onClick={prevSlide}
        >
          <FaChevronLeft className="text-gray-400 group-hover:text-white" />
        </button>
        <button
          className="group transform rounded-xl bg-[#111927] p-3 text-white hover:bg-[#1a222f]"
          onClick={nextSlide}
        >
          <FaChevronRight className="text-gray-400 group-hover:text-white" />
        </button>
      </div>
      {/** Pagination */}
      <div className="mt-4 flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`mx-1 h-1 w-10 ${
              index === currIndex
                ? "rounded-xl bg-[#beff46]"
                : "rounded-xl bg-gray-300"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
