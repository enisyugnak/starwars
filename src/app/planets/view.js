"use client";
import Image from "next/image";
import Hero from "./ui/hero";
import PlanetsList from "./ui/planets";
import Link from "next/link";
import SectionHeader from "@/ui/section-header";
import SectionNavigation from "@/ui/section-navigation";

export default function PlanetsView({ list }) {
  return (
    <div className="flex w-full flex-col gap-10">
      {/** Hero */}
      <section>
        <div className="grid-col grid justify-center md:grid-cols-2">
          <div className="flex w-full items-center justify-center p-10">
            <Image
              src="/planets-alpha/toydaria.webp"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="w-full pt-16 md:pl-5">
            <Hero />
          </div>
        </div>
      </section>

      {/** Planets List */}
      <section>
        <div className="flex items-end justify-between">
          <SectionHeader>Random Planets</SectionHeader>
          <Link
            href="/planets/all"
            className="pb-2 pr-5 font-bold text-sky-500"
          >
            VIEW ALL {`>`}
          </Link>
        </div>
        <PlanetsList list={list} />
      </section>
      {/** Site Navigation */}
      <section>
        <SectionHeader>Navigation</SectionHeader>
        <SectionNavigation />
      </section>
    </div>
  );
}
