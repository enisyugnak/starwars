import DetailsPage from "./view";
import { fetcUrl } from "@/services/fetch";
import config from "@/services/config";

export default async function PlanetDetail({ params }) {
  const { id } = await params;
  const url = `${config.apiUrl}/planets/${id}`;
  const data = await fetcUrl(url);
  if (!data) return <h2>No planet details found</h2>;

  return <DetailsPage data={data} />;
}
