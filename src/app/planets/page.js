import config from "@/services/config";
import { fetchPaginatedData, fetcUrl } from "@/services/fetch";
import PlanetsView from "./view";

export default async function Planets() {
  //await new Promise((resolve) => setTimeout(resolve, 2000)); //loading test
  const url = `${config.apiUrl}/planets/`;
  const data = await fetchPaginatedData(url);

  return <PlanetsView list={data} />;
}
