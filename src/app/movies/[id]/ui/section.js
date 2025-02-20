import SectionList from "./list";
import CardVehicle from "@/ui/cards/card-vehicle";
import { CardPersonBig } from "@/ui/cards/card-person-big";
import { CardSpecies } from "@/ui/cards/card-species";
import CardStarship from "@/ui/cards/card-starship";
import CardPlanetMain from "@/ui/cards/card-planet-main";
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
    <section className="mt-8 w-full">
      <SectionHeader>{section}</SectionHeader>
      <SectionList
        list={list}
        section={section}
        CardComponent={cards[section]}
      />
    </section>
  );
}
