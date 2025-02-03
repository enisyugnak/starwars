"use client";
import { CardSpecies } from "@/ui/card-species";
import { cleanString } from "@/utils/string";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function List({ data }) {
  const route = useRouter();
  const path = usePathname();
  const list =
    data &&
    data.map((item) => {
      const imageName = cleanString(item.name, "_");
      const image = `/species/${imageName}.webp`;
      return { ...item, image };
    });

  const urlSplit = list[0].url.split("/");
  const pathSplit = path.split("/");
  const pathId = pathSplit[2];
  const linkId = urlSplit.slice(-2)[0];

  useEffect(() => {
    if (list) {
      const link = `/species/${linkId}`;
      !pathId && route.replace(link);
    }
  }, [list, path]);

  useEffect(() => {
    const activeItem = document.getElementById(`card-${pathId}`);
    const container = document.getElementById("species-list-container");

    if (activeItem && container) {
      console.log("list: card-id", `card-${pathId}`);
      container.scrollTo({
        top: activeItem.offsetTop - container.offsetTop,
        behavior: "smooth",
      });
    }
  }, [pathId]);

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
