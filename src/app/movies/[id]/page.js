import Image from "next/image";
import config from "@/services/config";
import { fetcUrl } from "@/services/fetch";
import MovieDetail from "./view";

export default async function MoviesDetail({ params }) {
  const { id } = await params;
  const data = await fetcUrl(`${config.apiUrl}/films/${id}`);

  return <MovieDetail data={data} />;
}
