import { useLoading } from "@/context/loading";
import useFetchAll from "@/hooks/fetchAll";
import { addImageToJson } from "@/utils/data";
import { useEffect } from "react";

export default function SectionList({ list, section, CardComponent }) {
  const { data, loading, error } = useFetchAll(list);
  const { finishLoading, startLoading } = useLoading();
  useEffect(() => {
    startLoading();
  }, []);

  useEffect(() => {
    finishLoading();
  }, [data]);

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;

  // this adds images to the json array, section is the folder name of the images.
  const result = addImageToJson(data, section);

  return (
    <div className="grid-cols grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {result.map((item, index) => {
        return <CardComponent item={item} key={index} index={index + 1} />;
      })}
    </div>
  );
}
