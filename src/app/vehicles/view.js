import CardVehicle from "@/ui/card-vehicle";
import SectionHeader from "@/ui/section-header";
import { cleanString } from "@/utils/string";
import Image from "next/image";

export default function VehiclesView({ data }) {
  const list =
    data &&
    data.map((item) => {
      const imageName = cleanString(item.name, "_");
      const image = `/vehicles/${imageName}.webp`;
      return { ...item, image };
    });

  return (
    <section className="w-full">
      <SectionHeader>Vehicles</SectionHeader>
      <div className="grid-cols grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((item, index) => {
          return <CardVehicle item={item} key={index} />;
        })}
      </div>
    </section>
  );
}
