"use client";
import Link from "next/link";
import SectionHeader from "@/ui/section-header";
import NavSection from "@/ui/nav/nav-section";
import HeroPlanets from "@/ui/hero-planets";
import PlanetsPaginated from "@/ui/planets-paginated";

export default function PlanetsView({ list }) {
  const data = {
    image: "/planets-alpha/toydaria.webp",
    pill: "61 Planets",
    title: "Discover your favorite planet in the whole universe",
    body: "This page is dedicated to StarWars planets. This is an updated list from swapi api.",
  };

  return (
    <div className="flex w-full flex-col gap-10">
      {/** Planets Hero */}
      <section>
        <HeroPlanets data={data} />
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

        <PlanetsPaginated data={list} />
      </section>

      {/** Site Navigation */}
      <section>
        <SectionHeader>Navigation</SectionHeader>
        <NavSection />
      </section>
    </div>
  );
}
