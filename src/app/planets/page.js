import config from "@/services/config";
import { fetcUrl } from "@/services/fetch";
import PlanetsView from "./view";

export default async function Planets() {
  //await new Promise((resolve) => setTimeout(resolve, 2000)); //loading test
  const rand = Math.floor(Math.random() * 5) + 1;
  const url = `${config.apiUrl}/planets?page=${rand}`;
  const data = await fetcUrl(url);
  const list = data.results;

  return <PlanetsView list={list} />;
}
