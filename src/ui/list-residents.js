import { CardPerson } from "@/ui/card-person";
import { addImageToJson } from "@/utils/data";

export default function ListResidents({ people }) {
  const list = addImageToJson(people, "characters");
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
