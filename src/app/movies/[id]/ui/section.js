import SectionList from "./list";
import CardVehicle from "@/ui/card-vehicle";
import { CardPersonBig } from "@/ui/card-person-big";
import { CardSpecies } from "@/ui/card-species";
import CardStarship from "@/ui/card-starship";
import CardPlanetMain from "@/ui/card-planet-main";
import SectionHeader from "@/ui/section-header";

export default function PageSection({ section, list }) {
  const cards = {
    vehicles: CardVehicle,
    characters: CardPersonBig,
    species: CardSpecies,
    starships: CardStarship,
    planets: CardPlanetMain,
  };

  return (
    <section className="w-full">
      <SectionHeader>{section}</SectionHeader>
      <SectionList
        list={list}
        section={section}
        CardComponent={cards[section]}
      />
    </section>
  );
}
