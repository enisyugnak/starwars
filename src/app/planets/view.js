"use client";
import Link from "next/link";
import SectionHeader from "@/ui/section-header";
import NavSection from "@/ui/nav/nav-section";
import PlanetsPaginated from "@/ui/planets-paginated";
import ResponsiveSlider from "@/ui/image/slider/responsive-slider";

export default function PlanetsView({ list }) {
  const planets = [
    {
      name: "coruscant",
      image: "/planets-views/coruscant.webp",
    },
    {
      name: "dagobah",
      image: "/planets-views/dagobah.webp",
    },
    {
      name: "endor",
      image: "/planets-views/endor.webp",
    },
    {
      name: "hoth",
      image: "/planets-views/hoth.webp",
    },
    {
      name: "naboo",
      image: "/planets-views/naboo.webp",
    },
    {
      name: "tatooine",
      image: "/planets-views/tatooine.webp",
    },
    {
      name: "yavin",
      image: "/planets-views/yavin.webp",
    },
  ];
  return (
    <div className="flex w-full flex-col gap-10">
      {/** Planets Hero */}
      <section>
        <ResponsiveSlider
          images={planets}
          initialWidth="400"
          aspect="aspect-video"
        />
      </section>

      {/** Planets List */}
      <section>
        <div className="flex items-end justify-between">
          <SectionHeader>Planets</SectionHeader>
          <Link
            href="/planets/all"
            className="pb-2 pr-5 font-bold text-sky-500"
          >
            VIEW ALL {`>`}
          </Link>
        </div>

        <PlanetsPaginated data={list} loadmore={false} />
      </section>

      {/** Site Navigation */}
      <section>
        <SectionHeader>Navigation</SectionHeader>
        <NavSection />
      </section>
    </div>
  );
}
