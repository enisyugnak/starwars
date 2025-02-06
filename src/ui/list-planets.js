import CardPlanet from "@/ui/card-planet";
import { addImageToJson } from "@/utils/data";

export default function ListPlanets({ data }) {
  const list = addImageToJson(data, "planets");
  return (
    <div className="flex flex-col justify-center">
      <div className="grid-col grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {list.map((item, index) => (
          <CardPlanet key={index} endpoint="/planets" data={item} />
        ))}
      </div>
    </div>
  );
}
