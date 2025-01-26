import config from "@/services/config";
import { fetchPaginatedData } from "@/services/fetch";
import SpeciesView from "./view";
export default async function Species() {
  const apiUrl = config.apiUrl;
  const url = `${apiUrl}/species/`;
  const data = await fetchPaginatedData(url);
  data.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return <SpeciesView data={data} />;
}
