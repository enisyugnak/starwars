import config from "@/services/config";
import Planet from "../planet";

export default async function PeopleDetail({ params }) {
  const { id } = await params;

  const apiURL = config.apiUrl;
  const response = await fetch(`${apiURL}/people/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
  } = data;

  return (
    <div className="container mx-auto">
      <div className="w-full">
        <h1 className="text-2xl font-black">{name}</h1>
        <h2 className="font-bold">height: {height}</h2>
        <h2 className="font-bold">mass: {mass}</h2>
        <h2 className="font-bold">hair_color: {hair_color}</h2>
        <h2 className="font-bold">skin_color: {skin_color}</h2>
        <h2 className="font-bold">eye_color: {eye_color}</h2>
        <h2 className="font-bold">birth_year: {birth_year}</h2>
        <h2 className="font-bold">gender: {gender}</h2>
      </div>
      <div>
        <Planet homeworld={homeworld} />
      </div>
    </div>
  );
}
