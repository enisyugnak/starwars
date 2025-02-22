import config from "@/services/config";
import { fetcUrl } from "@/services/fetch";
import MovieDetail from "./view";
import { LoadingProvider } from "@/context/loading-context";

export default async function MoviesDetail({ params }) {
  const { id } = await params;
  const data = await fetcUrl(`${config.apiUrl}/films/${id}`);

  return (
    <LoadingProvider>
      <MovieDetail data={data} />
    </LoadingProvider>
  );
}
