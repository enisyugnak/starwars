import config from "@/services/config";
import PeopleDetailView from "./view";

export default async function PeopleDetail({ params }) {
  const { id } = await params;

  const apiURL = config.apiUrl;
  const response = await fetch(`${apiURL}/people/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();

  return <PeopleDetailView data={data} />;
}
