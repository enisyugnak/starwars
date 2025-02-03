import PeopleList from "./list";
import { addImageToJson } from "@/utils/data";
export default function PeopleView({ data }) {
  return <PeopleList data={data} />;
}
