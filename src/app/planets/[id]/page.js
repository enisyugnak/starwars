import DetailsPage from "./details";
import { fetcUrl } from "@/services/fetch";

export default async function PlanetDetail({ params }) {
  const { id } = await params;
  const data = await fetcUrl("https://swapi.py4e.com/api/planets/" + id);
  if (!data) return <h2>No planet details found</h2>;

  return <DetailsPage data={(id, data)} />;
}
