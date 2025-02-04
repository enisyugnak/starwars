import { CardPersonBig } from "@/ui/card-person-big";
import { addImageToJson } from "@/utils/data";

export default function CharactersSection({ list }) {
  const dataWithImages = addImageToJson(list, "people");
  // const data = list.map((item) => {
  //   const itemId = item.url.split("/").filter(Boolean).pop();
  //   const image = `/people/${itemId}.webp`;
  //   return { ...item, image };
  // });

  return (
    <div className="grid-cols grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {dataWithImages.map((item, index) => {
        return <CardPersonBig key={index} item={item} />;
      })}
    </div>
  );
}
