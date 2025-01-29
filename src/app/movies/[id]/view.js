"use client";
import { fetchAll } from "@/services/fetch";
import { CardPerson } from "@/ui/card-person";
import { CardSpecies } from "@/ui/card-species";
import PlanetsPaginated from "@/ui/planets-paginated";
import SectionHeader from "@/ui/section-header";
import { cleanString } from "@/utils/string";
import Image from "next/image";
import { useEffect, useState } from "react";
import SpeciesSection from "./ui/species";
import CharactersSection from "./ui/characters";

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

  const [chars, setChars] = useState([]);
  const [speciesData, setSpeciesData] = useState([]);
  const [planetsList, setPlanetsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const charsResult = await fetchAll(characters);
      const speciesResult = await fetchAll(species);
      const planetsResult = await fetchAll(planets);
      setChars(charsResult);
      setSpeciesData(speciesResult);
      setPlanetsList(planetsResult);
    };

    if (data) fetchData();
  }, [data]);

  const image = `/movies/episode_${episode_id}.webp`;

  return (
    <div className="flex w-full flex-col">
      {/** Hero Section */}
      <div className="grid grid-cols-1 p-5 lg:grid-cols-2">
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
            <h1 className="text-4xl font-black text-white">{title}</h1>
            <p>Release Date: {release_date}</p>
            <p>Director: {director}</p>
            <p>Producer: {producer}</p>
            <p className="mt-5">{opening_crawl}</p>
          </div>
        </section>
      </div>

      {/** Planets */}
      <section className="w-full">
        <SectionHeader>Planets</SectionHeader>
        <PlanetsPaginated data={planetsList} />
      </section>

      {/** Characters */}
      <section className="w-full">
        <SectionHeader>Characters</SectionHeader>
        <CharactersSection list={chars} />
      </section>
      {/** Species */}
      <section className="w-full">
        <SectionHeader>Species</SectionHeader>
        <SpeciesSection list={speciesData} />
      </section>

      {/** Vehicles */}
      <section className="w-full">
        <SectionHeader>Vehicles</SectionHeader>
        <ul>
          {vehicles.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        {/* <PlanetsPaginated data={planetsList} /> */}
      </section>

      {/** Starships */}
      <section className="flex w-full flex-col">
        <SectionHeader>Starships</SectionHeader>
        {/* <SpeciesSection list={speciesData} /> */}
        <div>
          {starships.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
      </section>
    </div>
  );
}
