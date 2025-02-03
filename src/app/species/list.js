"use client";
import { CardSpecies } from "@/ui/card-species";
import { cleanString } from "@/utils/string";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function List({ data }) {
  const route = useRouter();
  const list =
    data &&
    data.map((item) => {
      const imageName = cleanString(item.name, "_");
      const image = `/species/${imageName}.webp`;
      return { ...item, image };
    });

  useEffect(() => {
    if (list) {
      const urlSplit = list[0].url.split("/");
      const linkId = urlSplit.slice(-2)[0];
      const link = `/species/${linkId}`;
      route.replace(link);
    }
  }, [list]);

  return (
    <div className="grid h-full grid-cols-2 gap-2 md:flex md:flex-col md:gap-3">
      {list.map((item, index) => {
        return (
          <CardSpecies
            key={index}
            item={item}
            index={index + 1}
            dynoClass="min-w-[160px]"
          />
        );
      })}
    </div>
  );
}
