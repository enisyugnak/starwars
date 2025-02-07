import config from "@/services/config";
import { fetchPaginatedData } from "@/services/fetch";
import PlanetsView from "./view";

export default async function Planets() {
  const url = `${config.apiUrl}/planets/`;
  const data = await fetchPaginatedData(url);

  return <PlanetsView list={data} />;
}
