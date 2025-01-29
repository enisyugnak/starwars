import { CardPerson } from "@/ui/card-person";

export default function ListResidents({ people }) {
  const list =
    people &&
    people.map((item, index) => {
      const itemId = item.url.split("/").filter(Boolean).pop();
      const image = `/people/${itemId}.jpg`;
      return { ...item, image };
    });

  return (
    <div>
      <h2 className="mb-5 text-xl font-bold text-white">Residents</h2>
      <div className="flex flex-col">
        {list &&
          list.map((item, index) => {
            return <CardPerson key={index} item={item} />;
          })}
      </div>
    </div>
  );
}
