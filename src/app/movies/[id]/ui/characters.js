import { CardPersonBig } from "@/ui/card-person-big";

export default function CharactersSection({ list }) {
  const data = list.map((item) => {
    const itemId = item.url.split("/").filter(Boolean).pop();
    const image = `/people/${itemId}.jpg`;
    return { ...item, image };
  });

  return (
    <div className="grid-cols grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item, index) => {
        return <CardPersonBig key={index} item={item} />;
      })}
    </div>
  );
}
