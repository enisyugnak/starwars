import { CardPerson } from "@/ui/card-person";

export default function ListResidents({ people }) {
  return (
    <div>
      <h2 className="mb-5 text-xl font-bold text-white">Residents</h2>
      <div className="flex flex-col">
        {people &&
          people.map((item, index) => {
            const itemId = item.url.split("/").filter(Boolean).pop();
            const imageSrc = `/people/${itemId}.jpg`;
            return <CardPerson key={index} item={item} image={imageSrc} />;
          })}
      </div>
    </div>
  );
}
