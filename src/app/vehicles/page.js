import config from "@/services/config";
import { fetchPaginatedData } from "@/services/fetch";
import { sortArray } from "@/utils/string";
import VehiclesView from "./view";

export default async function Vehicles() {
  const apiUrl = config.apiUrl;
  const url = `${apiUrl}/vehicles/`;
  const data = await fetchPaginatedData(url);
  const result = sortArray(data);

  return <VehiclesView data={result} />;
}
