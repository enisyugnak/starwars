import config from "@/services/config";
import { fetchPaginatedData } from "@/services/fetch";
import VehiclesView from "./view";

export default async function Vehicles() {
  // const apiUrl = config.apiUrl;
  // const url = `${apiUrl}/vehicles/`;
  // const data = await fetchPaginatedData(url);
  // data.sort((a, b) => {
  //   return a.name.localeCompare(b.name);
  // });

  return <VehiclesView />;
}
