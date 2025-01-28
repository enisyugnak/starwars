import config from "@/services/config";
import { fetchPaginatedData } from "@/services/fetch";
import PlanetsAllView from "./view";

export default async function PlanetsAll() {
  //await new Promise((resolve) => setTimeout(resolve, 2000)); //loading test
  const url = `${config.apiUrl}/planets/`;
  const data = await fetchPaginatedData(url);

  return <PlanetsAllView initial={data} />;
}
