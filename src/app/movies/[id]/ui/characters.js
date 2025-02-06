import useFetchAll from "@/hooks/fetchAll";
import { CardPersonBig } from "@/ui/card-person-big";
import { addImageToJson } from "@/utils/data";

export default function CharactersSection({ list }) {
  const { data, loading, error } = useFetchAll(list);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const result = addImageToJson(data, "people");

  return (
    <div className="grid-cols grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {result.map((item, index) => {
        return <CardPersonBig key={index} item={item} />;
      })}
    </div>
  );
}
