import ResponsiveSlider from "@/ui/image/slider/responsive-slider";
import PeopleList from "./list";
import { addImageToJson } from "@/utils/data";
import SectionHeader from "@/ui/section-header";
import { getRandomItems } from "@/utils/array";
import NavSection from "@/ui/nav/nav-section";

export default function PeopleView({ data }) {
  const dataWithImages = addImageToJson(data, "characters");
  const randomImages = getRandomItems(dataWithImages, 8);

  return (
    <div className="flex w-full flex-col">
      <ResponsiveSlider images={randomImages} />
      <SectionHeader>People</SectionHeader>
      <PeopleList data={dataWithImages} />
      <SectionHeader>Navigation</SectionHeader>
      <NavSection />
    </div>
  );
}
