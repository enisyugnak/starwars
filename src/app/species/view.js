"use client";
import { CardSpecies } from "@/ui/card-species";
import { cleanString } from "@/utils/string";
import { useEffect } from "react";

export default function SpeciesView({ data }) {
  const list = data.map((item) => {
    const imageName = cleanString(item.name, "_");
    const image = `/species/${imageName}.webp`;
    return { ...item, image: image };
  });

  return (
    <div className="flex flex-col">
      <div className="grid-col grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((item, index) => {
          return <CardSpecies key={index} item={item} index={index + 1} />;
        })}
      </div>
    </div>
  );
}
