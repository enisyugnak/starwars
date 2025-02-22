"use client";
import Image from "next/image";
import PageSection from "./ui/section";
import { useLoading } from "@/context/loading-context";
import GlobalLoader from "@/ui/global-loader";
import SectionHeader from "@/ui/section-header";
import NavSection from "@/ui/nav/nav-section";

export default function MovieDetail({ data }) {
  const {
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
    characters,
    planets,
    starships,
    vehicles,
    species,
  } = data;
  const image = `/movies/episode_${episode_id}.webp`;
  const { isLoading } = useLoading();
  return (
    <div className="flex w-full flex-col">
      {/** Hero Section */}
      <div className="grid grid-cols-1 p-1 lg:grid-cols-2">
        <section className="flex h-full w-full justify-center md:pr-5">
          <figure className="relative h-[300px] w-full min-w-[200px] rounded-md bg-slate-700/40 p-4">
            <Image
              src={image}
              width={200}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-full w-full object-cover object-top"
              alt=""
            />
          </figure>
        </section>
        <section>
          <div className="mt-5 w-full md:mt-0">
            <h1 className="text-3xl font-black text-white sm:text-4xl">
              {title}
            </h1>
            <p>Release Date: {release_date}</p>
            <p>Director: {director}</p>
            <p>Producer: {producer}</p>
            <p className="mt-5">{opening_crawl}</p>
          </div>
        </section>
      </div>
      {/** wait for all the PageSection data is loaded */}
      {isLoading ? (
        <GlobalLoader />
      ) : (
        <div>
          <PageSection list={characters} section="characters" />
          <PageSection list={planets} section="planets" />
          <PageSection list={species} section="species" />
          <PageSection list={vehicles} section="vehicles" />
          <PageSection list={starships} section="starships" />
          {/** Site Navigation */}
          <div>
            <SectionHeader>Navigation</SectionHeader>
            <NavSection />
          </div>
        </div>
      )}
    </div>
  );
}
