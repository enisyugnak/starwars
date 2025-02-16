import { CardPerson } from "@/ui/card-person";
import { addImageToJson } from "@/utils/data";
import SectionHeader from "./section-header";

export default function ListResidents({ people }) {
  const list = addImageToJson(people, "characters");
  return (
    <div>
      <SectionHeader>Residents</SectionHeader>
      <div className="flex flex-col">
        {list &&
          list.map((item, index) => {
            return <CardPerson key={index} item={item} />;
          })}
      </div>
    </div>
  );
}
