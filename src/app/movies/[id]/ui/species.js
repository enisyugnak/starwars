import useFetchAll from "@/hooks/fetchAll";
import { CardSpecies } from "@/ui/card-species";
import { addImageToJson } from "@/utils/data";

export default function SpeciesSection({ list }) {
  const { data, loading, error } = useFetchAll(list);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const result = addImageToJson(data, "species");

  return (
    <div className="grid-cols grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {result.map((item, index) => {
        return <CardSpecies key={index} item={item} index={index + 1} />;
      })}
    </div>
  );
}
