import config from "@/services/config";
import MoviesView from "./view";
import { fetcUrl } from "@/services/fetch";

export default async function Movies() {
  const url = `${config.apiUrl}/films`;
  const data = await fetcUrl(url);
  const movies = data.results;

  return <MoviesView movies={movies} />;
}
