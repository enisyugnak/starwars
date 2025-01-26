import config from "@/services/config";
import { fetcUrl } from "@/services/fetch";
import PlanetsAllView from "./view";

export default async function PlanetsAll() {
  //await new Promise((resolve) => setTimeout(resolve, 2000)); //loading test
  const url = `${config.apiUrl}/planets`;
  const data = await fetcUrl(url);
  const list = data.results;
  const next = data.next;

  return <PlanetsAllView initial={list} next={next} />;
}
