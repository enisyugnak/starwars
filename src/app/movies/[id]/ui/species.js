import { CardSpecies } from "@/ui/card-species";
import { cleanString } from "@/utils/string";

export default function SpeciesSection({ list }) {
  const data = list.map((item) => {
    const imageName = cleanString(item.name, "_");
    const image = `/species/${imageName}.webp`;
    return { ...item, image };
  });

  return (
    <div className="grid-cols grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item, index) => {
        return <CardSpecies key={index} item={item} index={index + 1} />;
      })}
    </div>
  );
}
