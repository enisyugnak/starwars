import CardVehicle from "@/ui/cards/card-vehicle";
import HeroPlanets from "@/ui/hero-planets";
import SectionHeader from "@/ui/section-header";
import { cleanString } from "@/utils/string";

export default function VehiclesView({ data }) {
  const list =
    data &&
    data.map((item) => {
      const imageName = cleanString(item.name, "_");
      const image = `/vehicles/${imageName}.webp`;
      return { ...item, image };
    });

  const heroData = {
    image: "/planets-alpha/toydaria.webp",
    pill: "39 Vehicles",
    title: "Discover your favorite vehicle in the whole universe",
    body: "Here you may find some of the vehicles used in Starwars. All the data comes from the api so it may be change in time.",
  };
  return (
    <section className="w-full">
      <HeroPlanets data={heroData} />
      <SectionHeader>Vehicles</SectionHeader>
      <div className="grid-cols grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((item, index) => {
          return <CardVehicle item={item} key={index} />;
        })}
      </div>
    </section>
  );
}
