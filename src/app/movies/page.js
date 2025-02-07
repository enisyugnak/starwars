import config from "@/services/config";
import MoviesView from "./view";
import { fetchPaginatedData } from "@/services/fetch";

export default async function Movies() {
  const url = `${config.apiUrl}/films/`;
  const data = await fetchPaginatedData(url);

  return <MoviesView movies={data} />;
}
