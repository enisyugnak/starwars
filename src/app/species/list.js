import { CardSpecies } from "@/ui/card-species";
import { cleanString } from "@/utils/string";

export default function List({ data }) {
  const list =
    data &&
    data.map((item) => {
      const imageName = cleanString(item.name, "_");
      const image = `/species/${imageName}.webp`;
      return { ...item, image };
    });

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
