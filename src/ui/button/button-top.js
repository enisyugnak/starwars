"use client";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ButtonTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    show && (
      <div className="flex justify-end">
        <FaArrowCircleUp
          size={40}
          onClick={scrollToTop}
          // className="cursor-pointer transition duration-300 ease-in hover:scale-110 hover:text-sky-500"
          className="fixed bottom-4 right-4 z-[9999] cursor-pointer rounded-full bg-sky-700 p-2 text-sky-400 shadow-lg transition duration-300 ease-in hover:scale-110 hover:text-black"
        />
      </div>
    )
  );
}
