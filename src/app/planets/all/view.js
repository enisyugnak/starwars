"use client";
import { FaArrowCircleUp } from "react-icons/fa";

import SelfButton from "@/ui/button/button";
import PlanetsPaginated from "@/ui/planets-paginated";

export default function PlanetsAllView({ initial }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="mt-5">
      {/** Browser Back Button */}

      {/** Planets List */}
      <div className="flex items-center justify-between">
        <h1 className="my-5 text-left text-4xl font-black">Planets</h1>
        <SelfButton endpoint="/planets/">Back</SelfButton>
      </div>

      <PlanetsPaginated data={initial} loadmore={true} />

      {/** Scroll Top */}
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
