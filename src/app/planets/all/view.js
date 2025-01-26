"use client";
import { useState } from "react";
import PlanetsCard from "../ui/card";
import PlanetsList from "../ui/planets";
import { fetcUrl } from "@/services/fetch";
import Link from "next/link";
import SelfButton from "@/ui/self/button";
import { FaArrowCircleUp } from "react-icons/fa";

export default function PlanetsAllView({ initial, next }) {
  const [list, setList] = useState(initial);
  const [nextPage, setNextPage] = useState(next);

  const loadPage = async () => {
    if (nextPage) {
      const data = await fetcUrl(nextPage);
      setList((prev) => [...prev, ...data.results]);
      setNextPage(data.next);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="mt-5">
      <Link href="/planets/" className="pb-2 pr-5 font-bold text-sky-500">
        {`<`} BACK
      </Link>
      <h1 className="my-5 text-left text-4xl font-black">Planets</h1>
      <PlanetsList list={list} />
      <div className="mt-5 flex justify-center">
        <SelfButton hidden={!nextPage} onClick={loadPage}>
          Load More
        </SelfButton>
      </div>
      <div className="flex justify-end">
        <FaArrowCircleUp
          size={34}
          onClick={scrollToTop}
          className="cursor-pointer transition duration-300 ease-in hover:scale-110 hover:text-sky-500"
        />
      </div>
    </section>
  );
}
