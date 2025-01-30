"use client";
import ColorSpecies from "@/ui/colors-species";
import { useEffect, useState } from "react";

export default function PlayGroundView({ data }) {
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

  const newData = data.map((item, index) => {
    return item.eye_colors, item.hair_colors, item.skin_colors;
  });
  const uniqueItems = [
    ...new Set(
      newData.flatMap((item) => item.split(", ").map((i) => i.trim())),
    ),
  ];

  return (
    <section className="flex flex-wrap gap-3">
      {/* <Pagination setIndex={setIndex} /> */}
      <ColorSpecies colors="asian,hispanic,pale pink, n/a" />
      {/* {uniqueItems.sort().map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center gap-1 rounded-md border border-slate-800 p-2"
          >
            <div className="size-4 bg-teal-600"></div>
            <div className="">{item}</div>
          </div>
        );
      })} */}
    </section>
  );
}
