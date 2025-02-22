"use client";
import PageSection from "@/app/movies/[id]/ui/section";
import RoundedBlock from "@/app/planets/ui/rounded";
import { LoadingProvider } from "@/context/loading-context";
import { getGender } from "@/ui/icon/gender";
import SectionHeader from "@/ui/section-header";
import { cleanString } from "@/utils/string";
import Image from "next/image";

export default function PeopleDetailView({ data }) {
  const { name, height, mass, birth_year, gender, homeworld, species } = data;
  const imageName = cleanString(name, "_");
  const image = `/characters/${imageName}.webp`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <section className="flex h-full w-full justify-center md:pr-5">
        <div className="relative h-full w-full min-w-[240px] rounded-md bg-slate-700/40 p-4">
          <Image
            src={image}
            // sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
            width={300}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-cover object-top"
            alt=""
          />
        </div>
      </section>
      <section>
        <SectionHeader>{name}</SectionHeader>

        <div className="flex gap-3">
          <RoundedBlock title="Gender">{getGender(gender)}</RoundedBlock>
          <RoundedBlock title="Birth">{birth_year}</RoundedBlock>
          <RoundedBlock title="Height">{height}</RoundedBlock>
          <RoundedBlock title="Mass">{mass}</RoundedBlock>
        </div>
        <LoadingProvider>
          <PageSection list={species} section="species" />
          <PageSection list={[homeworld]} section="planets" />
        </LoadingProvider>
      </section>
    </div>
  );
}
