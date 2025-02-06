import useFetchAll from "@/hooks/fetchAll";
import CardVehicle from "@/ui/card-vehicle";
import { addImageToJson } from "@/utils/data";

export default function VehiclesSection({ list }) {
  const { data, loading, error } = useFetchAll(list);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const result = addImageToJson(data, "vehicles");

  return (
    <div className="grid-cols grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {result.map((item, index) => {
        return <CardVehicle item={item} key={index} />;
      })}
    </div>
  );
}
