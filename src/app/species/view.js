import { CardSpecies } from "@/ui/card-species";
import { cleanString } from "@/utils/string";

export default function SpeciesView({ data }) {
  const list = data.map((item) => {
    const imageName = cleanString(item.name, "_");
    const image = `/species/${imageName}.webp`;
    return { ...item, image: image };
  });

  console.log("view: list", list);

  return (
    <div className="container mx-auto">
      <h1 className="my-5 text-left text-4xl font-black">Species</h1>

      <div className="grid-col grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((item, index) => {
          return <CardSpecies key={index} item={item} index={index + 1} />;
        })}
      </div>
    </div>
  );
}
