import { useEffect, useState } from "react";
import ImagesList from "./list";
import ArrowNavigation from "./nav-arrows";
import Pagination from "./pagination";

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
      <ImagesList images={images} currIndex={currIndex} />

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
