"use client";
import { useEffect, useState } from "react";
import Pagination from "@/ui/section-pagination";
export default function PlayGroundView() {
  const images = [
    "/people/1.jpg",
    "/people/2.jpg",
    "/people/3.jpg",
    "/people/4.jpg",
    "/people/3.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("view: index", index);
  }, [index]);

  return (
    <section>
      <div>
        <Pagination setIndex={setIndex} />
      </div>
    </section>
  );
}
