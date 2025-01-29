import config from "@/services/config";
import { fetchPaginatedData } from "@/services/fetch";
import StarShipsView from "./view";

export default async function StarShips() {
  //await new Promise((resolve) => setTimeout(resolve, 15000)); //loading test

  const apiUrl = config.apiUrl;
  const url = `${apiUrl}/starships/`;
  const data = await fetchPaginatedData(url);

  return <StarShipsView data={data} />;
}
