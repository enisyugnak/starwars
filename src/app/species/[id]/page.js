import config from "@/services/config";
import { fetcUrl } from "@/services/fetch";
import SpeciesDetail from "./view";
export default async function SpeciesView({ params }) {
  const { id } = await params;
  const link = `${config.apiUrl}/species/${id}`;
  const data = await fetcUrl(link);

  return <SpeciesDetail data={data} />;
}
